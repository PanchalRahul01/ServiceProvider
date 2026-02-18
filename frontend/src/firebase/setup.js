import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoA67l8WC5iJD7DnYirYlVkrAD0kLyQ3g",
  authDomain: "myservice-38d06.firebaseapp.com",
  projectId: "myservice-38d06",
  storageBucket: "myservice-38d06.firebasestorage.app",
  messagingSenderId: "539493294504",
  appId: "1:539493294504:web:e2c15cdb87b4b4c3fc3d9d",
  measurementId: "G-J2F4NB2KN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);