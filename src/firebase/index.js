import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
        apiKey: "AIzaSyC1rVdKOUr6jJfzOpuOl0Apg0a2VBZTB2g",
        authDomain: "proyectofinalcoder.firebaseapp.com",
        projectId: "proyectofinalcoder",
        storageBucket: "proyectofinalcoder.appspot.com",
        messagingSenderId: "1044665688538",
        appId: "1:1044665688538:web:f6e4beae388a8b5d59e0e3"
      }
)

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}