
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAs66RhACtNDleauecrRd8EglMuq7HyT4A",
    authDomain: "f9-demo-store.firebaseapp.com",
    projectId: "f9-demo-store",
    storageBucket: "f9-demo-store.appspot.com",
    messagingSenderId: "853024949980",
    appId: "1:853024949980:web:3048732bda67faa126d619"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);