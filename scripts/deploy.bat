@echo off
echo 🚀 Starting deployment process...

REM Run build script
call scripts\build.bat

REM Start production server
echo 🌐 Starting production server...
call npm start
