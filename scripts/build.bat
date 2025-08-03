@echo off

echo 🚀 Starting production build...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM Install dependencies
echo 📦 Installing dependencies...
npm ci

REM Type check
echo 🔍 Running type check...
npm run type-check

REM Lint
echo 🔧 Running linter...
npm run lint

REM Build
echo 🏗️ Building application...
npm run build

echo ✅ Build completed successfully!
