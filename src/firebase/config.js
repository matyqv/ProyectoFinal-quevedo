import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXm47FRZCEhFuD9kEbII888t6iVReg3Lw",
  authDomain: "funk-heros.firebaseapp.com",
  projectId: "funk-heros",
  storageBucket: "funk-heros.firebasestorage.app",
  messagingSenderId: "1129860551",
  appId: "1:1129860551:web:43be7b1c01ff762e345de2"
};

export const app = initializeApp(firebaseConfig);