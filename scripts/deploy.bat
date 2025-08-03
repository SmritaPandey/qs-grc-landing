@echo off

echo 🚀 Deploying to GitHub Pages...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM Install dependencies
echo 📦 Installing dependencies...
npm ci

REM Build for production
echo �️ Building for production...
set NODE_ENV=production
npm run build

REM Add .nojekyll file to out directory
echo 📄 Adding .nojekyll file...
echo. > out\.nojekyll

REM Deploy to gh-pages branch
echo 🚀 Deploying to GitHub Pages...
npx gh-pages -d out

echo ✅ Deployment completed successfully!
echo 🌐 Your site will be available at: https://yourusername.github.io/qs-grc-landing
