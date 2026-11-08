@echo off
cd /d "%~dp0"
title On Tap Thuong Mai Dien Tu - CSE703102

echo ===================================================================
echo    DANG KHOI DONG HE THONG ON TAP THUONG MAI DIEN TU (CSE703102)
echo ===================================================================
echo.
echo [1/2] Dang mo trinh duyet tai: http://localhost:8000 ...
start "" "http://localhost:8000"

echo [2/2] Dang khoi dong may chu may chu du lieu va API dong bo...
echo ===================================================================
echo   [OK] HE THONG DA SAN SANG 100%!
echo   - Dia chi: http://localhost:8000
echo   - Bo de: 300 trac nghiem + 60 tu luan + 24 flashcard cong thuc
echo   - API: Dong bo QR Code & Link rut gon noi bo
echo.
echo   * Thu nho cua so nay xuong taskbar de tiep tuc hoc.
echo   * Khi hoc xong, dong cua so nay de tat may chu.
echo ===================================================================
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    python server.py 8000
    goto :end
)

where npx >nul 2>nul
if %errorlevel% equ 0 (
    npx serve -p 8000 .
    goto :end
)

start "" "%~dp0index.html"

:end
pause
