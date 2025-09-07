import type { CapacitorElectronConfig } from '@capacitor-community/electron';
import {
  CapElectronEventEmitter,
  CapacitorSplashScreen,
  setupCapacitorElectronPlugins,
} from '@capacitor-community/electron';
import chokidar from 'chokidar';
import type { MenuItemConstructorOptions } from 'electron';
import { app, BrowserWindow, Menu, MenuItem, nativeImage, Tray, session } from 'electron';
import electronIsDev from 'electron-is-dev';
import electronServe from 'electron-serve';
import windowStateKeeper from 'electron-window-state';
import { join } from 'path';

// Define components for a watcher to detect when the webapp is changed so we can reload in Dev mode.
const reloadWatcher = {
  debouncer: null,
  ready: false,
  watcher: null,
};
export function setupReloadWatcher(electronCapacitorApp: ElectronCapacitorApp): void {
  reloadWatcher.watcher = chokidar
    .watch(join(app.getAppPath(), 'app'), {
      ignored: /[/\\]\./,
      persistent: true,
    })
    .on('ready', () => {
      reloadWatcher.ready = true;
    })
    .on('all', (_event, _path) => {
      if (reloadWatcher.ready) {
        clearTimeout(reloadWatcher.debouncer);
        reloadWatcher.debouncer = setTimeout(async () => {
          electronCapacitorApp.getMainWindow().webContents.reload();
          reloadWatcher.ready = false;
          clearTimeout(reloadWatcher.debouncer);
          reloadWatcher.debouncer = null;
          reloadWatcher.watcher = null;
          setupReloadWatcher(electronCapacitorApp);
        }, 1500);
      }
    });
}

// Define our class to manage our app.
export class ElectronCapacitorApp {
  private MainWindow: BrowserWindow | null = null;
  private SplashScreen: CapacitorSplashScreen | null = null;
  private TrayIcon: Tray | null = null;
  private CapacitorFileConfig: CapacitorElectronConfig;
  private TrayMenuTemplate: (MenuItem | MenuItemConstructorOptions)[] = [
    new MenuItem({ label: 'Quit App', role: 'quit' }),
  ];
  private AppMenuBarMenuTemplate: (MenuItem | MenuItemConstructorOptions)[] = [
    { role: process.platform === 'darwin' ? 'appMenu' : 'fileMenu' },
    { role: 'viewMenu' },
  ];
  private mainWindowState;
  private loadWebApp;
  private customScheme: string;

  constructor(
    capacitorFileConfig: CapacitorElectronConfig,
    trayMenuTemplate?: (MenuItemConstructorOptions | MenuItem)[],
    appMenuBarMenuTemplate?: (MenuItemConstructorOptions | MenuItem)[]
  ) {
    this.CapacitorFileConfig = capacitorFileConfig;

    this.customScheme = this.CapacitorFileConfig.electron?.customUrlScheme ?? 'capacitor-electron';

    if (trayMenuTemplate) {
      this.TrayMenuTemplate = trayMenuTemplate;
    }

    if (appMenuBarMenuTemplate) {
      this.AppMenuBarMenuTemplate = appMenuBarMenuTemplate;
    }

    // Setup our web app loader, this lets us load apps like react, vue, and angular without changing their build chains.
    this.loadWebApp = electronServe({
      directory: join(app.getAppPath(), 'app'),
      scheme: this.customScheme,
    });
  }

  // Helper function to load in the app.
  private async loadMainWindow(thisRef: any) {
    await thisRef.loadWebApp(thisRef.MainWindow);
  }

  // Expose the mainWindow ref for use outside of the class.
  getMainWindow(): BrowserWindow {
    return this.MainWindow;
  }

  getCustomURLScheme(): string {
    return this.customScheme;
  }

  async init(): Promise<void> {
    // Configuração da title bar baseada na plataforma
    const titleBarConfig = process.platform === 'darwin'
      ? { titleBarStyle: 'hiddenInset' as const }
      : {
        titleBarStyle: 'hidden' as const,
        titleBarOverlay: { color: '#1b1464', symbolColor: '#ffffff', height: 30 }
      };

    let icon = nativeImage.createFromPath(
      join(app.getAppPath(), 'app', 'assets', 'images', 'Spacefeed - Avatar principal - 02.png')
    );

    // Certifica que o ícone é carregado corretamente
    if (icon.isEmpty()) {
      console.warn('Ícone principal não encontrado, tentando ícone alternativo...');
      const fallbackIcon = nativeImage.createFromPath(
        join(app.getAppPath(), 'assets', 'appIcon.png')
      );
      if (!fallbackIcon.isEmpty()) {
        icon = fallbackIcon;
      }
    }

    this.mainWindowState = windowStateKeeper({
      defaultWidth: 1000,
      defaultHeight: 800,
    });
    // Setup preload script path and construct our main window.
    const preloadPath = join(app.getAppPath(), 'build', 'src', 'preload.js');
    this.MainWindow = new BrowserWindow({
      icon,
      show: false,
      ...titleBarConfig,
      backgroundColor: '#000000',
      x: this.mainWindowState.x,
      title: 'Spacefeed Marte', // Define título explícito
      y: this.mainWindowState.y,
      width: this.mainWindowState.width,
      height: this.mainWindowState.height,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        // Use preload to inject the electron varriant overrides for capacitor plugins.
        // preload: join(app.getAppPath(), "node_modules", "@capacitor-community", "electron", "dist", "runtime", "electron-rt.js"),
        preload: preloadPath,
      },
    });

    this.mainWindowState.manage(this.MainWindow);

    if (this.CapacitorFileConfig.backgroundColor) {
      this.MainWindow.setBackgroundColor(this.CapacitorFileConfig.electron.backgroundColor);
    }

    // If we close the main window with the splashscreen enabled we need to destory the ref.
    this.MainWindow.on('closed', () => {
      if (this.SplashScreen?.getSplashWindow() && !this.SplashScreen.getSplashWindow().isDestroyed()) {
        this.SplashScreen.getSplashWindow().close();
      }
    });

    // When the tray icon is enabled, setup the options.
    if (this.CapacitorFileConfig.electron?.trayIconAndMenuEnabled) {
      this.TrayIcon = new Tray(icon);
      this.TrayIcon.on('double-click', () => {
        if (this.MainWindow) {
          if (this.MainWindow.isVisible()) {
            this.MainWindow.hide();
          } else {
            this.MainWindow.show();
            this.MainWindow.focus();
          }
        }
      });
      this.TrayIcon.on('click', () => {
        if (this.MainWindow) {
          if (this.MainWindow.isVisible()) {
            this.MainWindow.hide();
          } else {
            this.MainWindow.show();
            this.MainWindow.focus();
          }
        }
      });
      this.TrayIcon.setToolTip(app.getName());
      this.TrayIcon.setContextMenu(Menu.buildFromTemplate(this.TrayMenuTemplate));
    }

    // Setup the main manu bar at the top of our window.
    // Oculta o menu da aplicação (File, View, etc.)
    Menu.setApplicationMenu(null);

    // If the splashscreen is enabled, show it first while the main window loads then switch it out for the main window, or just load the main window from the start.
    if (this.CapacitorFileConfig.electron?.splashScreenEnabled) {
      const splashImagePath = join(
        app.getAppPath(),
        'assets',
        this.CapacitorFileConfig.electron?.splashScreenImageName ?? 'splash.png'
      );

      this.SplashScreen = new CapacitorSplashScreen({
        imageFilePath: splashImagePath,
        windowWidth: 400,
        windowHeight: 400,
      });
      this.SplashScreen.init(this.loadMainWindow, this);
    } else {
      this.loadMainWindow(this);
    }

    // Security
    this.MainWindow.webContents.setWindowOpenHandler((details) => {
      if (!details.url.includes(this.customScheme)) {
        return { action: 'deny' };
      } else {
        return { action: 'allow' };
      }
    });
    this.MainWindow.webContents.on('will-navigate', (event, _newURL) => {
      if (!this.MainWindow.webContents.getURL().includes(this.customScheme)) {
        event.preventDefault();
      }
    });

    this.setupTitleBar();

    // Link electron plugins into the system.
    setupCapacitorElectronPlugins();

    // When the web app is loaded we hide the splashscreen if needed and show the mainwindow.
    this.MainWindow.webContents.on('dom-ready', () => {
      if (this.CapacitorFileConfig.electron?.splashScreenEnabled) {
        this.SplashScreen.getSplashWindow().hide();
      }
      if (!this.CapacitorFileConfig.electron?.hideMainWindowOnLaunch) {
        this.MainWindow.show();
      }

      // Adiciona título customizado na barra de título
      this.MainWindow.webContents.insertCSS(`
        /* Compensa a altura da title bar overlay */
        html { 
          margin: 0 !important;
          padding: 0 !important;
        }
        
        body { 
          margin: 0 !important;
          padding: 0 !important;
          padding-top: 35px !important;
          box-sizing: border-box !important;
        }
        
        /* Cria área do título customizada */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 35px;
          background-color: #1b1464;
          z-index: 10000;
          -webkit-app-region: drag;
        }
        
        /* Título do texto com ícone */
        body::after {
          content: 'Spacefeed Marte - Beta v1.0.0';
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          left: 15px;
          width: calc(100% - 15px);
          z-index: 10001;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
          font-weight: 400;
          height: 35px;
          padding-left: 30px;
          pointer-events: none;
        }
        
        /* Ícone da imagem */
        html::before {
          content: '';
          position: fixed;
          top: 7px;
          left: 12px;
          width: 20px;
          height: 20px;
          background-image: url('capacitor-electron://localhost/assets/images/Spacefeed AVP - 10.png');
          background-size: contain;
          background-repeat: no-repeat;
          z-index: 10002;
          pointer-events: none;
        }
      `);
      setTimeout(() => {
        if (electronIsDev) {
          this.MainWindow.webContents.openDevTools();
        }
        CapElectronEventEmitter.emit('CAPELECTRON_DeeplinkListenerInitialized', '');
      }, 400);
    });
  }

  private setupTitleBar(): void {
    const applyFullTitleBarStyles = () => {
      this.MainWindow.webContents.insertCSS(`
        /* Reaplica todos os estilos da barra de título */
        body { 
          padding-top: 35px !important; 
        }
        
        body::before {
          content: '' !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          height: 35px !important;
          background-color: #1b1464 !important;
          z-index: 10000 !important;
          -webkit-app-region: drag !important;
          display: block !important;
        }
        
        body::after {
          content: 'Spacefeed Marte - Beta v1.0.0' !important;
          display: flex !important;
          align-items: center !important;
          position: fixed !important;
          top: 0 !important;
          left: 15px !important;
          width: calc(100% - 15px) !important;
          z-index: 10001 !important;
          color: #ffffff !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 13px !important;
          font-weight: 400 !important;
          height: 35px !important;
          padding-left: 30px !important;
          pointer-events: none !important;
        }
        
        html::before {
          content: '' !important;
          position: fixed !important;
          top: 7px !important;
          left: 12px !important;
          width: 20px !important;
          height: 20px !important;
          background-image: url('capacitor-electron://localhost/assets/images/Spacefeed AVP - 10.png') !important;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          z-index: 10002 !important;
          pointer-events: none !important;
          display: block !important;
        }
      `);
    };

    // Aplica estilos completos quando navegar para outras páginas
    this.MainWindow.webContents.on('did-navigate', () => {
      setTimeout(applyFullTitleBarStyles, 100);
      // Força a criação da imagem via JavaScript como backup
      setTimeout(() => {
        this.MainWindow.webContents.executeJavaScript(`
          const existingIcon = document.querySelector('.electron-title-icon');
          if (existingIcon) existingIcon.remove();
          
          const icon = document.createElement('img');
          icon.className = 'electron-title-icon';
          icon.src = 'capacitor-electron://localhost/assets/images/Spacefeed AVP - 10.png';
          icon.style.cssText = 'position: fixed !important; top: 7px !important; left: 12px !important; width: 20px !important; height: 20px !important; z-index: 10002 !important; pointer-events: none !important;';
          document.body.appendChild(icon);
        `).catch(() => { });
      }, 250);
    });

    // Também aplica quando a página termina de carregar
    this.MainWindow.webContents.on('did-finish-load', () => {
      setTimeout(applyFullTitleBarStyles, 50);
      // Força a criação da imagem via JavaScript como backup
      setTimeout(() => {
        this.MainWindow.webContents.executeJavaScript(`
          const existingIcon = document.querySelector('.electron-title-icon');
          if (existingIcon) existingIcon.remove();
          
          const icon = document.createElement('img');
          icon.className = 'electron-title-icon';
          icon.src = 'capacitor-electron://localhost/assets/images/Spacefeed AVP - 10.png';
          icon.style.cssText = 'position: fixed !important; top: 7px !important; left: 12px !important; width: 20px !important; height: 20px !important; z-index: 10002 !important; pointer-events: none !important;';
          document.body.appendChild(icon);
        `).catch(() => { });
      }, 200);
    });
  }
}

// Set a CSP up for our application based on the custom scheme
export function setupContentSecurityPolicy(customScheme: string): void {
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          `default -src 'self' ${customScheme}://* http://localhost:3000/*; 
      script - src 'self' ${customScheme}://* http://localhost:3000/* 'unsafe-inline' 'unsafe-eval'; 
      style - src 'self' ${customScheme}://* http://localhost:3000/* 'unsafe-inline'; 
      connect - src 'self' ${customScheme}://* http://localhost:* http://127.0.0.1:* http://* https://* ws://* wss://*; 
      img - src 'self' data: ${customScheme}://* http://* https://*; 
      frame - src 'self' ${customScheme}://* http://* https://*; 
      font - src 'self' data: ${customScheme}://* http://* https://*;
      media - src 'self' ${customScheme}://* http://* https://*;
      object - src 'none';
    form - action 'self' ${customScheme}://* http://* https://*;
    worker - src 'self' ${customScheme}://* blob:;`,
        ],
      },
    });
  });
}