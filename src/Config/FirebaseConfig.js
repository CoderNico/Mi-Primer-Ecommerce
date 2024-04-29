import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDbMm4AmFJhcUI3jyyjPpNkKMe9tutUWQU",
  authDomain: "react-coder-979f8.firebaseapp.com",
  projectId: "react-coder-979f8",
  storageBucket: "react-coder-979f8.appspot.com",
  messagingSenderId: "837420839714",
  appId: "1:837420839714:web:06e5326001fdbd5c192b7b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);