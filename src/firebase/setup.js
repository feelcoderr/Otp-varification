import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHaKhqid9unWnN3eZ_JZ_z6HMxUEuM2Z8",
  authDomain: "fir-otp-vercel.firebaseapp.com",
  projectId: "fir-otp-vercel",
  storageBucket: "fir-otp-vercel.appspot.com",
  messagingSenderId: "1084128988140",
  appId: "1:1084128988140:web:6be977b159d20d5d0e0ec9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";
export { auth };
