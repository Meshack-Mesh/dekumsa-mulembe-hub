# DeKUMSA - Dedan Kimathi University Mulembe Students Association

![DeKUMSA Logo](public/lovable-uploads/dekumsa%20logo.jpg)

> **"Together We Can"** - Building unity, culture, and excellence within the Mulembe community at Dedan Kimathi University.

## 🌟 Project Overview

DeKUMSA is a modern, responsive web application built for the Dedan Kimathi University Mulembe Students Association. The platform serves as a digital hub for the association's activities, connecting students, alumni, and community members through various features including membership management, event coordination, welfare support, and leadership information.

## ✨ Key Features

### 🏠 **Homepage**
- Hero section with association mission and values
- Featured upcoming events with interactive posters
- Quick access to key association services
- Responsive design optimized for all devices

### 👥 **Leadership**
- Interactive leadership profiles with photos
- Executive committee structure
- Contact information for each leader
- Responsive grid layout

### 🎯 **Membership**
- Digital membership registration form
- Email integration for automatic confirmations
- Form validation and error handling
- Membership benefits overview

### ❤️ **Welfare**
- Community support programs information
- Emergency contact details
- Welfare initiatives and projects
- Support request functionality

### 📅 **Events**
- Comprehensive events gallery
- Past and upcoming events showcase
- Image galleries for each event
- Event participation statistics

### 🎓 **Alumni**
- Alumni network information
- Success stories and achievements
- Alumni engagement opportunities
- Professional networking features

### 📞 **Contact**
- Multiple contact methods
- Interactive contact form
- Location information
- Social media links

### 🔒 **Admin Panel**
- Administrative dashboard
- Content management capabilities
- User management tools
- Analytics and reporting

## 🛠️ Technology Stack

### **Frontend**
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icon library

### **UI Components**
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Conflicting class resolution

### **Backend & Database**
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Relational database
- **Row Level Security** - Data access control
- **Real-time subscriptions** - Live data updates

### **Forms & Validation**
- **React Hook Form** - Performant form library
- **Zod** - Schema validation
- **Hookform Resolvers** - Form validation integration

### **State Management**
- **TanStack Query** - Server state management
- **React Context** - Global state management

### **Mobile Support**
- **Capacitor** - Native mobile app wrapper
- **iOS & Android** - Cross-platform mobile deployment

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript Compiler** - Type checking

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd dekumsa-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment variables template
   cp .env.example .env
   
   # Add your Supabase credentials
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
dekumsa-project/
├── public/                          # Static assets
│   ├── lovable-uploads/            # User uploaded images
│   ├── robots.txt                  # SEO robots file
│   └── favicon.ico                 # Website icon
├── src/                            # Source code
│   ├── components/                 # React components
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── Layout.tsx             # Main layout wrapper
│   │   ├── MembershipFormHandler.tsx # Membership form logic
│   │   └── WeeklyMeetingCard.tsx  # Meeting card component
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   ├── integrations/              # External service integrations
│   │   └── supabase/              # Supabase configuration
│   ├── lib/                       # Utility libraries
│   │   └── utils.ts               # Helper functions
│   ├── pages/                     # Page components
│   │   ├── Home.tsx               # Homepage
│   │   ├── Leadership.tsx         # Leadership page
│   │   ├── Membership.tsx         # Membership page
│   │   ├── Welfare.tsx            # Welfare page
│   │   ├── Events.tsx             # Events page
│   │   ├── Alumni.tsx             # Alumni page
│   │   ├── Contact.tsx            # Contact page
│   │   ├── Admin.tsx              # Admin dashboard
│   │   └── NotFound.tsx           # 404 error page
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # App entry point
│   └── index.css                  # Global styles
├── supabase/                      # Supabase configuration
│   ├── functions/                 # Edge functions
│   │   └── send-membership-email/ # Email service
│   └── config.toml                # Supabase config
├── capacitor.config.ts            # Mobile app configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── vite.config.ts                 # Vite build configuration
└── package.json                   # Dependencies and scripts
```

## 🧭 Navigation Structure

The application uses React Router for client-side navigation with the following routes:

### **Main Routes**
- `/` - **Homepage** - Welcome page with hero section and featured events
- `/leadership` - **Leadership** - Executive committee and leadership team
- `/membership` - **Membership** - Join the association and membership benefits
- `/welfare` - **Welfare** - Community support and welfare programs
- `/events` - **Events** - Past and upcoming events gallery
- `/alumni` - **Alumni** - Alumni network and success stories
- `/contact` - **Contact** - Get in touch and location information
- `/admin` - **Admin Panel** - Administrative dashboard (restricted access)

### **Navigation Features**
- **Responsive Design** - Mobile-first navigation with hamburger menu
- **Active State Indication** - Current page highlighting
- **Smooth Scrolling** - Enhanced user experience
- **Back Navigation** - Mobile-friendly back button
- **Safe Area Support** - Optimized for mobile devices

### **Mobile Navigation**
- Collapsible hamburger menu for mobile devices
- Full-screen overlay navigation
- Touch-friendly interface
- Safe area considerations for notched devices

## 🎨 Design System

### **Color Palette**
- **Primary Colors** - Red and Green (reflecting Kenyan heritage)
- **Accent Color** - Yellow (complementary accent)
- **Neutral Colors** - Gray scale for text and backgrounds

### **Typography**
- **Headings** - Bold, clear hierarchy
- **Body Text** - Readable and accessible
- **Interactive Elements** - Clear visual feedback

### **Components**
- **Cards** - Information containers with shadows
- **Buttons** - Multiple variants (primary, secondary, outline)
- **Forms** - Accessible with validation feedback
- **Navigation** - Consistent across all pages

## 🔧 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Mobile Development
npm run build-mobile # Build for mobile deployment
npx cap sync         # Sync with Capacitor
npx cap run ios      # Run on iOS simulator
npx cap run android  # Run on Android emulator
```

### **Code Standards**
- **TypeScript** - All components are typed
- **ESLint** - Code linting and formatting
- **Component Structure** - Functional components with hooks
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components

### **Development Workflow**
1. Create feature branch from main
2. Implement changes with proper TypeScript types
3. Test responsive design on multiple devices
4. Run linting and fix any issues
5. Create pull request with description
6. Review and merge to main

## 🚀 Deployment

### **Web Deployment**
The application can be deployed to various platforms:

- **Vercel** - Recommended for React applications
- **Netlify** - Easy deployment with git integration
- **GitHub Pages** - Free hosting for static sites

### **Mobile Deployment**
Using Capacitor for native mobile apps:

```bash
# iOS Deployment
npm run build-mobile
npx cap sync ios
npx cap open ios
# Build and deploy through Xcode

# Android Deployment
npm run build-mobile
npx cap sync android
npx cap open android
# Build and deploy through Android Studio
```

## 🤝 Contributing

We welcome contributions from the DeKUMSA community! Here's how you can help:

### **How to Contribute**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and TypeScript conventions
- Add proper documentation for new features
- Test your changes on multiple screen sizes
- Ensure accessibility standards are maintained
- Update README if adding new features

### **Areas for Contribution**
- UI/UX improvements
- New features and functionality
- Performance optimizations
- Mobile app enhancements
- Documentation improvements
- Bug fixes and testing

## 📧 Support & Contact

### **Technical Support**
- **Email**: dekumsafamily@gmail.com
- **WhatsApp**: +254 741 224 547

### **Association Contact**
- **Location**: Dedan Kimathi University, Nyeri
- **Website**: [Your domain when deployed]
- **Social Media**: [Add social media links]

## 📄 License

This project is developed for the Dedan Kimathi University Mulembe Students Association. All rights reserved.

---

## 🎯 Future Enhancements

### **Planned Features**
- [ ] User authentication system
- [ ] Event booking and payment integration
- [ ] Real-time chat for members
- [ ] Push notifications for mobile apps
- [ ] Member directory with search
- [ ] Document management system
- [ ] Newsletter subscription system
- [ ] Multi-language support (English/Swahili)

### **Technical Improvements**
- [ ] Progressive Web App (PWA) features
- [ ] Offline functionality
- [ ] Performance optimizations
- [ ] Advanced analytics integration
- [ ] API rate limiting
- [ ] Enhanced security features

---

**Built with ❤️ by the DeKUMSA Community**

*"Together We Can" - Empowering the Mulembe community through technology and unity.*