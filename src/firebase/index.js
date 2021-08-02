import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAv8JPSC4kf2W0yhhhrsl0MiucVFyDSQps",
    authDomain: "rubiks-site.firebaseapp.com",
    projectId: "rubiks-site",
    storageBucket: "rubiks-site.appspot.com",
    messagingSenderId: "668789200110",
    appId: "1:668789200110:web:4d927934f539cd3c868fff"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}