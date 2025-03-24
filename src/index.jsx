import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAshWvwETJPNgmSGhnJOkPltF1ceJ4JRxc",
  authDomain: "medicare-web-app-88492.firebaseapp.com",
  projectId: "medicare-web-app-88492",
  storageBucket: "medicare-web-app-88492.firebasestorage.app",
  messagingSenderId: "39571786055",
  appId: "1:39571786055:web:3e7cc5d7f500478d162462",
  measurementId: "G-C3L54GCXVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase services
export { auth, db };