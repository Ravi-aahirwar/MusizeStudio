import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAC21wqYIcL_8vUNK3bPD9qX93sfL6v-CM",
  authDomain: "musize-4d48a.firebaseapp.com",
  projectId: "musize-4d48a",
  storageBucket: "musize-4d48a.appspot.com",
  messagingSenderId: "366534598866",
  appId: "1:366534598866:web:6a3a40e2ad37f910f5cd0b",
  measurementId: "G-NGG0HV4L5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export{app,auth}