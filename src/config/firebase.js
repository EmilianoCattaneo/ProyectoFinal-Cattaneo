import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi6scrENp0vKCS914tpSVhSjMQAfJldFM",
    authDomain: "coderhouse-novatech.firebaseapp.com",
    projectId: "coderhouse-novatech",
    storageBucket: "coderhouse-novatech.appspot.com",
    messagingSenderId: "149703435740",
    appId: "1:149703435740:web:4fb983a6300abeb2f0db19"
};

console.log("Estoy configurando mi firebase con el objeto:", firebaseConfig)
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)