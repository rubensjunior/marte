const fs = require('fs');
const path = require('path');

// Caminhos dos arquivos
const sourceIcon = path.join(__dirname, 'app', 'assets', 'images', 'Spacefeed - Avatar principal - 02.png');
const sourceSplash = path.join(__dirname, 'app', 'assets', 'images', 'Spacefeed AVP - 10.png');

const targetIconPng = path.join(__dirname, 'assets', 'appIcon.png');
const targetIconIco = path.join(__dirname, 'assets', 'appIcon.ico');
const targetSplashPng = path.join(__dirname, 'assets', 'splash.png');
const targetSplashGif = path.join(__dirname, 'assets', 'splash.gif');

console.log('Copiando ícones...');

// Copia o ícone principal
if (fs.existsSync(sourceIcon)) {
  fs.copyFileSync(sourceIcon, targetIconPng);
  console.log('✓ Ícone PNG copiado');
} else {
  console.warn('⚠ Arquivo de ícone fonte não encontrado:', sourceIcon);
}

// Copia o splash screen
if (fs.existsSync(sourceSplash)) {
  fs.copyFileSync(sourceSplash, targetSplashPng);
  console.log('✓ Splash screen PNG copiado');
} else {
  console.warn('⚠ Arquivo de splash fonte não encontrado:', sourceSplash);
}

console.log('Processo concluído!');
console.log('');
console.log('NOTA: Para converter PNG para ICO, você precisa usar uma ferramenta externa.');
console.log('Recomendação: Use https://convertio.co/png-ico/ ou similar para converter');
console.log(`o arquivo ${targetIconPng} para ${targetIconIco}`);