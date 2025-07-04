import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
appId: 'app.lovable.a2c31dbc721a482e9b7cdab81e41a0bb',
appName: 'dekumsa-mulembe-hub',
webDir: 'dist',

// ▶ This tells the WebView to load your live site
server: {
url: 'https://dekumsa-mulembe-hub.vercel.app/',
// cleartext: true      // not needed—your URL is HTTPS
},

plugins: {
SplashScreen: {
launchShowDuration: 2000,
backgroundColor: '#ef4444',
showSpinner: false,
},
StatusBar: {
style: 'dark',
backgroundColor: '#ef4444',
},
},
};

export default config;
