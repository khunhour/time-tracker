import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCkQRAbWnRhrNhq32boowEKhIzDLipWq30",
	authDomain: "time-tracker-ec3fc.firebaseapp.com",
	projectId: "time-tracker-ec3fc",
	storageBucket: "time-tracker-ec3fc.appspot.com",
	messagingSenderId: "563388771414",
	appId: "1:563388771414:web:474e7e8dd5bc1e2894dff7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
