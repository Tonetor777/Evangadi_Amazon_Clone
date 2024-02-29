import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrx3hZl5bGezktwuIvVAonpIbj150VsS8",
    authDomain: "evangadi--clone.firebaseapp.com",
    projectId: "evangadi--clone",
    storageBucket: "evangadi--clone.appspot.com",
    messagingSenderId: "1075221334891",
    appId: "1:1075221334891:web:0da9e9e72734ce2b0dda2e"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
