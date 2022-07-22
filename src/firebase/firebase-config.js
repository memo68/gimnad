import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const startGoogleAuth = () => {
    const firebaseconfig = {
        apiKey: "AIzaSyAMMEmTPajSZGOPXCYC5CoOl0_-9ZmXhxI",
        authDomain: "gimadmidemo.firebaseapp.com",
        projectId: "gimadmidemo",
        storageBucket: "gimadmidemo.appspot.com",
        messagingSenderId: "277814329696",
        appId: "1:277814329696:web:5aca811142626b0a71de05"
    }
    firebase.initializeApp(firebaseconfig);
    const db = firebase.firestore();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
};

export {db, googleAuthProvider, firebase};