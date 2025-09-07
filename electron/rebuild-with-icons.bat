@echo off
echo ========================================
echo Recriando icones e instalador do Marte
echo ========================================

echo.
echo 1. Limpando arquivos antigos...
if exist "assets\appIcon.ico" del "assets\appIcon.ico"
if exist "assets\appIcon.png" del "assets\appIcon.png"
if exist "assets\splash.png" del "assets\splash.png"

echo.
echo 2. Gerando novos icones a partir do logo...
npm run create-icons

echo.
echo 3. Verificando se os icones foram criados...
if exist "assets\appIcon.ico" (
    echo ✓ appIcon.ico criado com sucesso
) else (
    echo ✗ Erro: appIcon.ico nao foi criado
    pause
    exit /b 1
)

if exist "assets\appIcon.png" (
    echo ✓ appIcon.png criado com sucesso
) else (
    echo ✗ Erro: appIcon.png nao foi criado
    pause
    exit /b 1
)

echo.
echo 4. Compilando TypeScript...
npm run build

echo.
echo 5. Criando instalador...
npm run electron:pack

echo.
echo ========================================
echo Processo concluido!
echo ========================================
echo.
echo O instalador deve agora conter o logo personalizado.
echo Verifique o arquivo gerado na pasta 'dist'.
echo.
pause