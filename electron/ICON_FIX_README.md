# Correções para Ícones e Splash Screen

## Problemas identificados e soluções implementadas:

### 1. Ícone do aplicativo não aparece
**Problema**: O ícone padrão do Electron estava sendo usado ao invés do ícone personalizado.

**Solução**:
- Atualizado `electron-builder.config.json` com configurações mais robustas
- Adicionado `productName` e configurações específicas para Windows e macOS
- Corrigido caminho do ícone no código TypeScript

### 2. Splash Screen não aparece
**Problema**: Configurações do splash screen estavam incompletas.

**Solução**:
- Adicionado configurações específicas do Electron no `capacitor.config.json`
- Habilitado `splashScreenEnabled: true`
- Corrigido caminho da imagem do splash screen

### 3. Ícones de baixa qualidade ou formato incorreto
**Problema**: Ícones podem não estar no formato ou tamanho adequado.

**Solução**:
- Criado script `create-icons.js` para gerar ícones de alta qualidade
- Script converte automaticamente uma imagem existente para os formatos necessários

## Como aplicar as correções:

### Passo 1: Gerar novos ícones
```bash
cd electron
npm run create-icons
```

### Passo 2: Rebuild do aplicativo
```bash
npm run build
```

### Passo 3: Criar novo pacote
```bash
npm run electron:pack
```

### Passo 4: Testar o aplicativo
```bash
npm run electron:start
```

## Arquivos modificados:
1. `electron-builder.config.json` - Configurações de build melhoradas
2. `capacitor.config.json` - Configurações do Electron adicionadas
3. `setup.ts` - Lógica de carregamento de ícones melhorada
4. `package.json` - Script para criação de ícones adicionado
5. `create-icons.js` - Script para gerar ícones (novo)

## Verificações após o build:
- O ícone do aplicativo deve aparecer na barra de tarefas
- O ícone do aplicativo deve aparecer no desktop (se criado atalho)
- O splash screen deve aparecer durante o carregamento
- O título da janela deve ser "Spacefeed Marte"

## Troubleshooting:

### Se o ícone ainda não aparecer:
1. Verifique se os arquivos `appIcon.ico` e `appIcon.png` foram criados na pasta `assets/`
2. Execute `npm run create-icons` novamente
3. Certifique-se de que o arquivo `Spacefeed AVP - 10.png` existe em `app/assets/images/`

### Se o splash screen não aparecer:
1. Verifique se o arquivo `splash.png` foi criado na pasta `assets/`
2. Confirme que `splashScreenEnabled` está `true` no `capacitor.config.json`
3. Verifique se não há erros no console durante a inicialização

### Formatos de ícone recomendados:
- **Windows**: `.ico` com múltiplos tamanhos (16x16, 32x32, 48x48, 64x64, 128x128, 256x256)
- **macOS**: `.png` ou `.icns` de pelo menos 512x512
- **Splash Screen**: `.png` de 400x400 ou maior