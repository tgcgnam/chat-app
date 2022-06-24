import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBkgS3fK5in3VjcGoshUkmjqqKeMaWmu9M",
    authDomain: "chat-app-2e15e.firebaseapp.com",
    projectId: "chat-app-2e15e",
    storageBucket: "chat-app-2e15e.appspot.com",
    messagingSenderId: "598825929181",
    appId: "1:598825929181:web:fff0ecc9a01756c6470e34",
    measurementId: "G-2NSVH44SJH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === "localhost") {
    db.useEmulator('localhost', '8080');
}

export { db, auth };

export default firebase;