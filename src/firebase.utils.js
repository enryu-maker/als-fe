import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCJNkZc5sJ9xaUbc_c2zIdmXInhoZWiZps",
    authDomain: "affordable-luxury-space.firebaseapp.com",
    projectId: "affordable-luxury-space",
    storageBucket: "affordable-luxury-space.appspot.com",
    messagingSenderId: "14559057366",
    appId: "1:14559057366:web:6251537138209e900cc077",
    measurementId: "G-LJMF54L82G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt: "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);