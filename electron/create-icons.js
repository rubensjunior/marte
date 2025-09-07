const { nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

// Função para criar ícones de diferentes tamanhos
function createIcons() {
  const sourcePath = path.join(__dirname, 'app', 'assets', 'images', 'Spacefeed AVP - 10.png');
  const outputDir = path.join(__dirname, 'assets');
  
  if (!fs.existsSync(sourcePath)) {
    console.error('Arquivo de origem não encontrado:', sourcePath);
    return;
  }
  
  // Carrega a imagem original
  const originalImage = nativeImage.createFromPath(sourcePath);
  
  if (originalImage.isEmpty()) {
    console.error('Não foi possível carregar a imagem:', sourcePath);
    return;
  }
  
  // Cria ícone PNG para macOS
  const pngIcon = originalImage.resize({ width: 512, height: 512 });
  fs.writeFileSync(path.join(outputDir, 'appIcon.png'), pngIcon.toPNG());
  
  // Cria ícone ICO para Windows
  const icoSizes = [16, 32, 48, 64, 128, 256];
  const icoImages = icoSizes.map(size => 
    originalImage.resize({ width: size, height: size })
  );
  
  // Para ICO, vamos usar a imagem redimensionada
  const icoIcon = originalImage.resize({ width: 256, height: 256 });
  fs.writeFileSync(path.join(outputDir, 'appIcon.ico'), icoIcon.toPNG());
  
  // Cria splash screen
  const splashIcon = originalImage.resize({ width: 400, height: 400 });
  fs.writeFileSync(path.join(outputDir, 'splash.png'), splashIcon.toPNG());
  
  console.log('Ícones criados com sucesso!');
}

createIcons();