// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM5M6wkEk5VCvGnYGzXYIGBFsiQ2SG1eQ",
  authDomain: "exclusive-9690c.firebaseapp.com",
  projectId: "exclusive-9690c",
  storageBucket: "exclusive-9690c.firebasestorage.app",
  messagingSenderId: "398305817371",
  appId: "1:398305817371:web:1aea248b8ccee2f19a19be",
  measurementId: "G-52KZTF6GM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;