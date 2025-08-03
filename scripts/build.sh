#!/bin/bash

echo "🚀 Starting production build..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Type check
echo "🔍 Running type check..."
npm run type-check

# Lint
echo "🔧 Running linter..."
npm run lint

# Build
echo "🏗️ Building application..."
npm run build

echo "✅ Build completed successfully!"
