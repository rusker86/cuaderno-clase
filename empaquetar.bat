@echo off
setlocal enabledelayedexpansion

REM Lee nombre y apellidos desde cuaderno.config.json (simple parser usando findstr)
set "nombre="
set "apellidos="
for /f "tokens=2 delims::, " %%A in ('findstr /i /c:"\"nombre\"" cuaderno.config.json') do set nombre=%%~A
for /f "tokens=2 delims::, " %%A in ('findstr /i /c:"\"apellidos\"" cuaderno.config.json') do set apellidos=%%~A

REM Limpia comillas y espacios
set nombre=%nombre:"=%
set apellidos=%apellidos:"=%
set nombre=%nombre: =_%
set apellidos=%apellidos: =_%

set unidad=%1
if "%unidad%"=="" set unidad=TODA

set zipname=ENTREGA_%apellidos%_%nombre%_%unidad%.zip

echo Creando %zipname% ...
powershell -NoLogo -NoProfile -Command "Compress-Archive -Path 'cuaderno' -DestinationPath '%zipname%' -Force"
echo Hecho: %zipname%
pause