# Terpafy Landing Page

> **Digital Health Assistant for SEC Patients**  
> A modern, mobile-responsive one-page landing page built with React, Vite, and Tailwind CSS.

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://github.com/[username]/terpafy-lp)

---

## 📋 Quick Links

- **[📄 Full PRD Documentation](./PRD.md)** - Complete Product Requirements Document
- **[🎨 Brand Guidelines](./docs/Brand%20Book%20Terpafy_%20Guia%20Completo%20de%20Identidade%20Visual%20(Assistente%20de%20Saúde%20SEC).md)** - Visual identity guide
- **[🚀 Live Demo](#)** - Coming soon

---

## 🎯 Project Overview

Terpafy is a digital health assistant that provides secure and empathetic support for patients undergoing Endocannabinoid System (SEC) treatment via WhatsApp. This landing page serves as the primary entry point for patients and healthcare professionals.

### Key Features
- ✅ **Mobile-First Design** - Optimized for all devices
- ✅ **Tailwind CSS** - Utility-first styling with brand colors
- ✅ **React + Vite** - Fast, modern development experience
- ✅ **GitHub Pages Deployment** - Automatic deployments with CI/CD
- ✅ **WCAG AA Compliant** - Accessible to all users
- ✅ **Performance Optimized** - Lighthouse score > 90

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/[username]/terpafy-lp.git
cd terpafy-lp

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--color-primary: #1E642E;        /* Terpafy Green */
--color-secondary: #9ACD32;      /* Lime Green */

/* Status Colors */
--color-success: #388E3C;
--color-alert: #DC143C;
--color-warning: #FFD700;
```

### Typography

- **Headings:** Montserrat (Bold 700, SemiBold 600)
- **Body:** Open Sans (Regular 400, Medium 500)
- **Base Size:** 16px with 1.6 line-height

### Spacing

8-Point Grid System: `8px, 16px, 24px, 32px, 48px, 64px`

---

## 🏗️ Project Structure

```
terpafy-lp/
├── .github/workflows/     # CI/CD configuration
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   ├── styles/           # CSS files
│   └── assets/           # Images, fonts, icons
├── docs/                 # Documentation
├── PRD.md               # Product Requirements Document
└── README.md            # This file
```

---

## 🚢 Deployment

### Deploy to GitHub Pages

#### Option 1: Manual Deployment
```bash
# Build and deploy
npm run deploy
```

#### Option 2: Automatic Deployment (Recommended)
1. Push code to GitHub `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at: `https://[username].github.io/terpafy-lp/`

#### Option 3: Enable GitHub Pages
1. Go to **Repository → Settings → Pages**
2. Under **Build and deployment**:
   - **Source:** GitHub Actions
3. Push to `main` branch to trigger deployment

### Environment Variables

**Local Development (.env):**
```bash
VITE_WHATSAPP_NUMBER=+55XXXXXXXXXXX
VITE_API_URL=https://api.terpafy.com
```

**GitHub Actions (Repository Secrets):**
1. Go to **Repository → Settings → Secrets and variables → Actions**
2. Add: `VITE_WHATSAPP_NUMBER` and `VITE_API_URL`

---

## 🔄 CI/CD Pipeline

Automated deployment workflow using GitHub Actions:

- **Pull Requests:** Build check and validation
- **Main Branch:** Automatic deployment to GitHub Pages

See [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) for workflow details.

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | 320px - 767px | Single column |
| Tablet | 768px - 1023px | Flexible layout |
| Desktop | 1024px+ | Multi-column |

---

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**
- **Minimum Contrast Ratio:** 4.5:1
- **Keyboard Navigation:** Full support
- **Screen Reader:** Optimized with ARIA labels
- **Focus Indicators:** Visible on all interactive elements

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Mobile responsiveness (320px - 767px)
- [ ] Tablet responsiveness (768px - 1023px)
- [ ] Desktop responsiveness (1024px+)
- [ ] Cross-browser compatibility
- [ ] Accessibility (keyboard, screen reader)
- [ ] Performance (Lighthouse audit)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📖 Documentation

- **[Complete PRD](./PRD.md)** - Full product requirements
- **[Brand Guidelines](./docs/)** - Visual identity and design system
- **[Tailwind Docs](https://tailwindcss.com/docs)** - CSS framework
- **[React Docs](https://react.dev)** - Frontend framework
- **[Vite Docs](https://vitejs.dev)** - Build tool

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/new-section`
2. Make your changes
3. Commit: `git commit -m "feat: add new section"`
4. Push: `git push origin feature/new-section`
5. Create a Pull Request

### Commit Convention
```
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semi colons, etc
refactor: code restructuring
test: adding tests
chore: maintenance tasks
```

---

## 📄 License

This project is proprietary and confidential.

---

## 👥 Team

- **Project Lead:** [Name]
- **Developer:** [Name]
- **Designer:** [Name]

---

## 📞 Support

For questions or support, please contact:
- **Email:** support@terpafy.com
- **WhatsApp:** [Number]
- **Website:** https://terpafy.com

---

## 🗺️ Roadmap

### Phase 1: Setup & Configuration ✅
- [x] Initialize project
- [x] Configure Tailwind CSS
- [x] Set up CI/CD pipeline

### Phase 2: Design Implementation 🚧
- [ ] Hero section
- [ ] Features section
- [ ] How It Works section
- [ ] Benefits section
- [ ] CTA section
- [ ] Footer

### Phase 3: Optimization 📋
- [ ] Mobile optimization
- [ ] Accessibility improvements
- [ ] Performance optimization

### Phase 4: Launch 🚀
- [ ] Testing
- [ ] Production deployment
- [ ] Monitoring setup

---

**Made with ❤️ by the Terpafy Team**
