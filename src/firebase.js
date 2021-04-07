import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyC0EDR4WWQw1_5uTsTYk6Ylwk4P4CNwo8E",
    authDomain: "portfolio-bb003.firebaseapp.com",
    projectId: "portfolio-bb003",
    storageBucket: "portfolio-bb003.appspot.com",
    messagingSenderId: "395191235908",
    appId: "1:395191235908:web:b52db3c41aecd2719ed311",
    measurementId: "G-5CW7ZPXY65"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;