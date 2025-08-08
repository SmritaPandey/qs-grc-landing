@echo off
echo 🚀 Starting production build...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci

REM Type check
echo 🔍 Running type check...
call npm run type-check

REM Lint
echo 🔧 Running linter...
call npm run lint

REM Build
echo 🏗️ Building application...
call npm run build

echo ✅ Build completed successfully!
