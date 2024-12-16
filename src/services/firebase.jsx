import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8EhXalYkFiA_QF-kr_AHfleAz9f-NB-8",
  authDomain: "ronaldo-proyecto-reactjs.firebaseapp.com",
  projectId: "ronaldo-proyecto-reactjs",
  storageBucket: "ronaldo-proyecto-reactjs.firebasestorage.app",
  messagingSenderId: "811777960041",
  appId: "1:811777960041:web:b6ebd23923ee4b01a19af8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)