
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a2c31dbc721a482e9b7cdab81e41a0bb',
  appName: 'dekumsa-mulembe-hub',
  webDir: 'dist',
  server: {
    url: 'https://a2c31dbc-721a-482e-9b7c-dab81e41a0bb.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ef4444',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#ef4444'
    }
  }
};

export default config;
