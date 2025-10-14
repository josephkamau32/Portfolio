# 🚀 Joseph Kamau's Portfolio

> *Crafting digital experiences with precision and passion*

A stunning, fully responsive developer portfolio built with modern web technologies. Features smooth animations, dark/light theme support, and an elegant design system that showcases the perfect blend of creativity and technical expertise.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-success?style=for-the-badge&logo=vercel)](https://portfolio-wheat-ten-e934coi9er.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🎨 Design & UI
- **Modern Design System**: Fully themed with semantic color tokens for consistent styling
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Responsive Design**: Optimized for all devices from mobile to 4K displays
- **Glass Morphism Effects**: Modern frosted glass UI components
- **Smooth Animations**: Carefully crafted CSS and scroll-triggered animations
- **Gradient Accents**: Dynamic gradients that adapt to the theme

### 🔧 Core Sections
- **Hero Section**: Eye-catching introduction with animated typing effect showcasing multiple roles
- **About Section**: Professional bio with highlighted skills and enhanced profile image with gradient glow
- **Skills Showcase**: Categorized technical skills with beautiful badge design
- **Experience Timeline**: Professional work history with detailed descriptions
- **Project Portfolio**: Featured projects with links and technology tags
- **Testimonials**: Client and colleague recommendations with ratings
- **Animated Stats**: Real-time counter animations showing achievements and metrics
- **Contact Form**: Integrated email functionality via Supabase Edge Functions
- **Back to Top Button**: Smart floating button that appears on scroll

### ⚡ Performance & SEO
- **Lightning Fast**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Lazy Loading**: Optimized image loading for faster page speeds
- **Smooth Scrolling**: Native smooth scroll behavior for better UX

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful icon system
- **React Router** - Client-side routing

### Backend
- **Supabase** - Edge Functions for serverless API and database
- **Resend** - Email delivery service for contact forms
- **Vercel** - Modern hosting and deployment platform

### Additional Libraries
- **next-themes** - Theme management
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **sonner** - Toast notifications
- **@tanstack/react-query** - Data fetching and caching

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm))
- Git for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/kamau-portfolio.git
cd kamau-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create environment file for Supabase and email configuration
cp .env.example .env.local
# Add your Supabase URL and API keys
```

4. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default port)

## 📁 Project Structure

```
├── public/
│   ├── robots.txt          # SEO robots configuration
│   └── favicon.ico         # Site favicon
├── src/
│   ├── assets/             # Images and static assets
│   │   ├── profile-original.png
│   │   └── profile-enhanced.png
│   ├── components/         # React components
│   │   ├── About.tsx       # About section with profile
│   │   ├── BackToTop.tsx   # Scroll to top button
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Footer.tsx      # Page footer
│   │   ├── Hero.tsx        # Hero section with typing effect
│   │   ├── Navigation.tsx  # Main navigation bar
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Skills.tsx      # Skills categorization
│   │   ├── Stats.tsx       # Animated statistics
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── ThemeToggle.tsx # Dark/light mode toggle
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx  # Mobile detection
│   │   ├── use-toast.ts    # Toast notifications
│   │   └── useTypingEffect.ts # Typing animation
│   ├── integrations/       # Third-party integrations
│   │   └── supabase/       # Supabase client & types
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main portfolio page
│   │   └── NotFound.tsx    # 404 page
│   ├── index.css           # Global styles & design tokens
│   ├── App.tsx             # App wrapper
│   └── main.tsx            # Entry point
├── supabase/
│   ├── config.toml         # Supabase configuration
│   └── functions/          # Edge functions
│       └── send-contact-email/ # Contact form handler
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## 🎨 Customization Guide

### Update Personal Information

1. **Profile Image**: Replace images in `src/assets/`
2. **Hero Section**: Edit `src/components/Hero.tsx` - update name, roles, and bio
3. **About Section**: Modify `src/components/About.tsx` - update bio and highlights
4. **Skills**: Update `src/components/Skills.tsx` - add/remove skills by category
5. **Experience**: Edit `src/components/Experience.tsx` - add your work history
6. **Projects**: Modify `src/components/Projects.tsx` - showcase your projects
7. **Testimonials**: Update `src/components/Testimonials.tsx` - add client reviews
8. **Stats**: Edit `src/components/Stats.tsx` - update achievement numbers
9. **Contact**: Configure `src/components/Contact.tsx` - update social links

### Customize Design System

The design system uses semantic tokens defined in `src/index.css`:

```css
:root {
  --primary: [your-hsl-color];
  --secondary: [your-hsl-color];
  --accent: [your-hsl-color];
  /* Add custom gradients, shadows, etc. */
}
```

### Configure Contact Form

1. Set up your email service (Resend API key)
2. Configure Supabase environment variables
3. Update recipient email in `supabase/functions/send-contact-email/index.ts`

## 📧 Contact Form Setup

The portfolio includes a fully functional contact form powered by Supabase Edge Functions and Resend:

1. The form is already integrated in `src/components/Contact.tsx`
2. Email delivery is handled via `supabase/functions/send-contact-email/`
3. Configure your RESEND_API_KEY in your Supabase environment
4. Update the recipient email address in the edge function

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Deploy to Other Platforms

The project can be deployed to any static hosting service:

**Netlify**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages**
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

**Cloudflare Pages**
```bash
npm run build
# Connect repository and deploy dist/ folder
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Inspiration & Credits

- UI Components by [shadcn/ui](https://ui.shadcn.com) - Beautiful, accessible components
- Icons by [Lucide](https://lucide.dev) - Consistent icon system
- Hosted on [Vercel](https://vercel.com) with [Supabase](https://supabase.com)
- Design inspiration from modern web standards and best practices

## 📞 Contact & Support

**Developer**: Joseph Kamau  
**Email**: [iamjosephkamau@gmail.com](mailto:iamjosephkamau@gmail.com)  
**Portfolio**: [https://portfolio-wheat-ten-e934coi9er.vercel.app/](https://portfolio-wheat-ten-e934coi9er.vercel.app/)

For support, collaboration, or just to say hello, feel free to reach out!

---

<div align="center">

**Built with ❤️ by Joseph Kamau using React, TypeScript, and modern web technologies**

*Crafting exceptional digital experiences, one line of code at a time* ✨

</div>
