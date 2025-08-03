# GitHub Pages Deployment Guide for QS-GRC Landing Page

## 🚀 Quick Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Create a GitHub repository:**
   ```bash
   # On GitHub.com, create a new repository named 'qs-grc-landing'
   ```

2. **Connect your local repository:**
   ```bash
   git remote add origin https://github.com/yourusername/qs-grc-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

4. **Your site will be available at:**
   ```
   https://yourusername.github.io/qs-grc-landing
   ```

### Option 2: Manual Deployment

1. **Update configuration:**
   - Edit `package.json` and update the homepage URL
   - Edit `next.config.ts` and update the basePath if needed

2. **Deploy manually:**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration Checklist

- ✅ `next.config.ts` configured for static export
- ✅ `package.json` includes GitHub Pages scripts
- ✅ GitHub Actions workflow created
- ✅ `.nojekyll` file added
- ✅ Roboto font properly configured
- ✅ All fonts changed from Geist to Roboto
- ✅ Positioning and scrolling optimized
- ✅ Build optimization for production

## 📝 Important Notes

1. **Repository Name**: If you use a different repository name, update:
   - `basePath` in `next.config.ts`
   - `homepage` in `package.json`

2. **Custom Domain**: To use a custom domain:
   - Add a `CNAME` file to the `public` folder
   - Configure your domain's DNS settings

3. **Build Process**: The project uses:
   - Static export (`output: 'export'`)
   - Unoptimized images for GitHub Pages compatibility
   - Automatic asset prefix for correct paths

## 🎯 Verification

After deployment, verify:
- [ ] Site loads at the GitHub Pages URL
- [ ] All fonts are Roboto
- [ ] Presentation slides work correctly
- [ ] Navigation is functional
- [ ] Responsive design works on mobile
- [ ] All animations are smooth

## 🐛 Troubleshooting

**Common Issues:**

1. **404 Error**: Check if the `basePath` matches your repository name
2. **Missing Assets**: Ensure `.nojekyll` file exists in the output
3. **Font Issues**: Verify Roboto font is loading correctly
4. **Build Errors**: Run `npm run build` locally to test

**Getting Help:**
- Check the GitHub Actions logs for build errors
- Verify all environment variables are set correctly
- Ensure all dependencies are installed

## 🎉 Success!

Your QS-GRC landing page is now deployed to GitHub Pages with:
- ✅ Roboto font throughout the application
- ✅ Optimized positioning and scrolling
- ✅ Clean file structure
- ✅ Production-ready build
- ✅ Automatic deployment workflow

The presentation maintains its beautiful design while being optimized for web deployment!
