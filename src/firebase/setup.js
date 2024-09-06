import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7yX4h_k4cNTyZLO6TZAbCbnhSuZOMUdg",
  authDomain: "otp-demo-481b4.firebaseapp.com",
  projectId: "otp-demo-481b4",
  storageBucket: "otp-demo-481b4.appspot.com",
  messagingSenderId: "679151518309",
  appId: "1:679151518309:web:9e2de76ea7d3837b0abc8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";
export { auth };
