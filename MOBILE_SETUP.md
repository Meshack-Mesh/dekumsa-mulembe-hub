
# DeKUMSA Mobile App Setup Guide

This guide will help you set up and run the DeKUMSA mobile application on your device.

## Prerequisites

- Node.js (v16 or higher)
- Git
- For iOS: Mac with Xcode installed
- For Android: Android Studio installed

## Setup Instructions

### 1. Export to GitHub
1. Click the "Export to GitHub" button in Lovable
2. Create or connect to your GitHub repository

### 2. Local Development Setup
```bash
# Clone your repository
git clone <YOUR_GITHUB_REPO_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Initialize Capacitor (if not already done)
npx cap init

# Add mobile platforms
npx cap add ios      # For iOS
npx cap add android  # For Android

# Build the web app
npm run build

# Sync with mobile platforms
npx cap sync
```

### 3. Running on Mobile

#### For Android:
```bash
# Run on Android device/emulator
npx cap run android
```

#### For iOS:
```bash
# Run on iOS device/simulator (Mac only)
npx cap run ios
```

### 4. Development Workflow

When making changes to your code:
1. Make changes in Lovable or locally
2. Run `npm run build` to build the web app
3. Run `npx cap sync` to sync changes to mobile platforms
4. Run `npx cap run android` or `npx cap run ios` to test

## Mobile-Specific Features

The app is optimized for mobile with:
- Touch-friendly interface
- Responsive design that works on all screen sizes
- Native mobile navigation
- Optimized performance for mobile devices
- Native splash screen and status bar styling

## Troubleshooting

### Common Issues:

1. **Build fails**: Make sure all dependencies are installed with `npm install`
2. **Sync fails**: Try running `npx cap update` before `npx cap sync`
3. **iOS won't run**: Ensure you're on a Mac with Xcode installed
4. **Android won't run**: Ensure Android Studio is installed and configured

### Need Help?
Check the official Capacitor documentation: https://capacitorjs.com/docs

## Hot Reload for Development

The app is configured to use hot reload during development, connecting directly to the Lovable preview URL. This means you can make changes in Lovable and see them immediately on your mobile device without rebuilding.

For production deployment, you'll want to build and deploy your web app to a hosting service, then update the `server.url` in `capacitor.config.ts` to point to your production URL.
