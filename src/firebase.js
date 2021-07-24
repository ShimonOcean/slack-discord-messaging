import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBg6TDayeCkA8XyJmaUEfKxQEb8r7Jzn5o",
    authDomain: "slack-discord-messaging.firebaseapp.com",
    projectId: "slack-discord-messaging",
    storageBucket: "slack-discord-messaging.appspot.com",
    messagingSenderId: "706710627884",
    appId: "1:706710627884:web:f0ce8ca648ddb1d578d389"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };