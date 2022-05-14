// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfrS60COyaH_WNrLmtx17MfTm3xsiBdZY",
    authDomain: "blog-publish.firebaseapp.com",
    projectId: "blog-publish",
    storageBucket: "blog-publish.appspot.com",
    messagingSenderId: "253952898340",
    appId: "1:253952898340:web:30dbdfe774af23b717efb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)

