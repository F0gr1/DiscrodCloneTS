import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAr6eqiguUKEEWFhTCX89jyDlMvoaB6Ork",
  authDomain: "discord-clone-26371.firebaseapp.com",
  projectId: "discord-clone-26371",
  storageBucket: "discord-clone-26371.appspot.com",
  messagingSenderId: "48866191985",
  appId: "1:48866191985:web:986d0dd8c3e9ffbd49c9d0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider ,db};