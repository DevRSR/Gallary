import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBfFa0NO9peT6NB_X6NFZy_rmcptpJ-ng4",
  authDomain: "reel-gallery.firebaseapp.com",
  projectId: "reel-gallery",
  storageBucket: "reel-gallery.appspot.com",
  messagingSenderId: "440391093464",
  appId: "1:440391093464:web:8236a046a0e4d97577dbad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();