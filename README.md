# 🚀 Jainish Gamit - Portfolio Website

A modern, interactive portfolio website built with React, featuring smooth animations, responsive design, and an engaging user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC) ![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5.4-FF0055)

## ✨ Features

### 🎨 **Modern Design**
- Clean, minimalist interface with dark theme
- Responsive design that works on all devices
- Custom typography and carefully crafted spacing
- Professional color scheme with accent colors

### 🎭 **Advanced Animations**
- **Custom Loader**: Interactive loading screen with progress indicator and scroll prevention
- **Smooth Transitions**: GSAP-powered animations throughout the site
- **Framer Motion**: Micro-interactions and hover effects
- **Wave Transitions**: Custom clip-path animations for social media links
- **Scroll-triggered Animations**: Elements animate as they come into view

### 🛡️ **Enhanced User Experience**
- **Scroll Control**: Sophisticated scroll prevention during loading
- **Smooth Navigation**: Custom smooth scrolling between sections
- **Interactive Elements**: Hover effects and click animations
- **Mobile Optimized**: Touch-friendly interactions for mobile devices

### 📱 **Responsive Sections**
- **Hero Section**: Eye-catching introduction with animated elements
- **About**: Personal information and skills showcase
- **Projects**: Portfolio of work with interactive previews
- **Contact**: Multiple ways to connect with social media integration

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and functional components
- **Vite 5.4.1** - Lightning-fast build tool and dev server

### **Styling & UI**
- **TailwindCSS 3.4.10** - Utility-first CSS framework
- **PostCSS 8.4.45** - CSS processing tool
- **React Icons 5.3.0** - Beautiful icon library

### **Animations & Interactions**
- **GSAP 3.12.5** - Professional-grade animation library
- **Framer Motion 11.5.4** - React animation library
- **Lenis 1.1.13** - Smooth scroll library

### **Development Tools**
- **ESLint 9.9.0** - Code linting and quality assurance
- **Autoprefixer 10.4.20** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jainishgamit374/Portfolio_New_Dev.git
   cd Portfolio_New_Dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── Components/        # React components
│   │   ├── Loader.jsx    # Loading screen with scroll prevention
│   │   ├── Footer.jsx    # Footer with social media links
│   │   └── ...           # Other components
│   ├── assets/           # Images, fonts, and media files
│   ├── styles/           # Global styles and CSS files
│   └── App.jsx           # Main application component
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.js        # Vite build configuration
└── README.md            # Project documentation
```

## 🎯 Key Components

### **Loader Component**
- **Progressive Loading**: Visual progress indicator from 0% to 100%
- **Scroll Prevention**: Comprehensive scroll blocking until user interaction
- **Interactive Start**: Users must click START button to proceed
- **Smooth Transition**: GSAP-powered reveal animation

### **Footer Component**
- **Social Media Links**: GitHub, LinkedIn, Twitter, Instagram
- **Wave Animations**: Custom clip-path transitions for link clicks
- **Contact Information**: Email and phone number display
- **Responsive Layout**: Adapts to different screen sizes

## 🎨 Animations & Effects

### **Loading Sequence**
1. Text animation slides in from top
2. Circular progress indicator draws stroke
3. Percentage counter animates from 0% to 100%
4. START button fades in with bounce effect
5. User clicks START to enable scrolling

### **Social Media Interactions**
1. Hover effects on social links
2. Click triggers wave overlay animation
3. Smooth transition before opening external link
4. Wave-out animation completes the interaction

## 🔧 Customization

### **Colors**
Edit `tailwind.config.js` to customize the color palette:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### **Animations**
Modify animation timings in component files:
- GSAP animations in `useGSAP` hooks
- Framer Motion variants in component props
- CSS transitions in Tailwind classes

### **Content**
Update personal information in:
- `Footer.jsx` - Contact details and social links
- Other component files for portfolio content

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

- Touch-friendly interface
- Optimized layouts for tablets and phones
- Gesture-based interactions
- Mobile-specific scroll prevention

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jainish Gamit**
- 📧 Email: [Jainishgamit374@gmail.com](mailto:Jainishgamit374@gmail.com)
- 📱 Phone: +91 9574981958
- 🐙 GitHub: [@jainishgamit374](https://github.com/jainishgamit374)
- 💼 LinkedIn: [Jainish Gamit](https://linkedin.com/in/jainish-gamit)
- 🐦 Twitter: [@jainishgamit374](https://twitter.com/jainishgamit374)
- 📸 Instagram: [@jainish_gamit](https://instagram.com/jainish_gamit)

## 🙏 Acknowledgments

- **GSAP** - For powerful animation capabilities
- **Framer Motion** - For React-specific animations
- **TailwindCSS** - For rapid UI development
- **React Team** - For the amazing framework
- **Vite** - For the incredible build tool

## 🔥 Performance Features

- **Optimized Bundle**: Vite's optimized production builds
- **Lazy Loading**: Components loaded as needed
- **Smooth Animations**: 60fps animations with hardware acceleration
- **Mobile Performance**: Touch-optimized interactions

---

<div align="center">
  <p>Made with ❤️ by Jainish Gamit</p>
  <p>© 2025 All Rights Reserved</p>
</div>
