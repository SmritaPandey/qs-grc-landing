# QS-GRC Landing Page

A modern, responsive landing page for QS-GRC (Governance, Risk & Compliance Platform) built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, professional interface with Roboto font
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive Presentation**: Slide-based presentation with navigation controls
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Static export for fast loading
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Roboto (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qs-grc-landing.git
cd qs-grc-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Enable GitHub Pages in your repository settings
3. The GitHub Actions workflow will automatically build and deploy on every push to main/master

### Manual Deployment

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/qs-grc-landing"
```

2. Update the `basePath` in `next.config.ts` if needed:
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/qs-grc-landing' : '',
```

3. Run the deployment script:
```bash
npm run deploy
```

Or use the platform-specific scripts:
- **Linux/Mac**: `./scripts/deploy.sh`
- **Windows**: `scripts\deploy.bat`

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static files
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

## 🎨 Design Features

- **Roboto Font**: Professional typography throughout
- **Enhanced Scrollbar**: Custom styled scrollbars
- **Smooth Animations**: Float, pulse-glow, and slide-in effects
- **Glass Morphism**: Modern glass effect elements
- **Gradient Text**: Eye-catching gradient text elements
- **3D Effects**: Perspective and transform effects

## 📁 Project Structure

```
qs-grc-landing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Roboto font
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── presentation.tsx   # Main presentation component
│   ├── slide-*.tsx       # Individual slides
│   └── ui/               # UI components
├── public/               # Static assets
├── scripts/              # Deployment scripts
└── .github/workflows/    # GitHub Actions
```

## 🎯 Performance Optimizations

- Static export for fast loading
- Image optimization disabled for GitHub Pages compatibility
- Code splitting and chunk optimization
- CSS optimization with Tailwind
- Font optimization with Google Fonts

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_APP_NAME="QS-GRC"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_ENVIRONMENT="development"
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Save the settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

For questions or support, please open an issue in the GitHub repository.
