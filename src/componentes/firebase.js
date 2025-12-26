import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPSq2GEOlnvxyQH_69wHWhF_kA2UVySfI",
  authDomain: "davyd-8f4e4.firebaseapp.com",
  projectId: "davyd-8f4e4",
  storageBucket: "davyd-8f4e4.firebasestorage.app",
  messagingSenderId: "561146445272",
  appId: "1:561146445272:web:b3b477bfc45b95c956c6ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Firestore
export const db = getFirestore(app);

// Auth
export const auth = getAuth(app);
auth.useDeviceLanguage();

// Provider do Google (login)
export const provider = new GoogleAuthProvider();

// 🔥 Importante: Forçar POPUP para evitar o erro de redirect
provider.setCustomParameters({
  prompt: "select_account"
});