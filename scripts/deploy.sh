#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build for production
echo "�️ Building for production..."
NODE_ENV=production npm run build

# Add .nojekyll file to out directory
echo "📄 Adding .nojekyll file..."
touch out/.nojekyll

# Deploy to gh-pages branch
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d out

echo "✅ Deployment completed successfully!"
echo "🌐 Your site will be available at: https://yourusername.github.io/qs-grc-landing"
