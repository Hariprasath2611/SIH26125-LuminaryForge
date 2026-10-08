import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyD77fQHtztMAx_FfLMvv2ujQC9tYFh7Npg',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'bharosa-cd1e6.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'bharosa-cd1e6',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'bharosa-cd1e6.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '227881717805',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:227881717805:web:f8e9515a73fcb583b368a4',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-XJLDW87PTM',
};

// Initialize Firebase App
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Safe browser analytics initialization (only in production with support check)
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined' && import.meta.env.PROD) {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (_) {}
    }
  }).catch(() => {
    // Ignore analytics unsupported environment
  });
}

// Connect to Firebase Auth Emulator if enabled
if (import.meta.env.VITE_USE_AUTH_EMULATOR === 'true') {
  try {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    console.log('[Firebase] Connected to local Auth Emulator on http://127.0.0.1:9099');
  } catch (err) {
    // Emulator might already be connected
  }
}
