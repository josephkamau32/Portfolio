# 🚀 Modern Developer Portfolio

A stunning, fully responsive developer portfolio built with modern web technologies. Features smooth animations, dark/light theme support, and an elegant design system.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8?style=for-the-badge&logo=tailwind-css)

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
- **Lovable Cloud** - Integrated backend platform
- **Supabase** - Edge Functions for serverless API
- **Resend** - Email delivery service

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
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env
```

4. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

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
2. Add the secret via Lovable Cloud
3. Update recipient email in `supabase/functions/send-contact-email/index.ts`

## 📧 Contact Form Setup

The portfolio includes a fully functional contact form powered by Supabase Edge Functions and Resend:

1. The form is already integrated in `src/components/Contact.tsx`
2. Email delivery is handled via `supabase/functions/send-contact-email/`
3. Configure your RESEND_API_KEY in the Lovable Cloud backend
4. Update the recipient email address in the edge function

## 🚀 Deployment

### Deploy with Lovable

1. Click the **Publish** button in the Lovable editor
2. Your site will be live at `yoursite.lovable.app`
3. Optionally connect a custom domain in Settings → Domains

### Deploy to Other Platforms

The project can be deployed to any static hosting service:

**Vercel**
```bash
npm run build
vercel deploy
```

**Netlify**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages / Cloudflare Pages**
```bash
npm run build
# Upload the dist/ folder
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

- Built with [Lovable](https://lovable.dev)
- UI Components by [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Hosted on Lovable Cloud with Supabase

## 📞 Support

For support, email your contact email or open an issue in the repository.

---

**Built with ❤️ using Lovable, React, and TypeScript**

**Project URL**: https://lovable.dev/projects/83448a3f-d56b-40a3-98cb-1c1f267d3bff
