import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCFDV6DVun22vqdzUFtSiEpIfOJ_n-zqHU',
    authDomain: 'twitter-clone-c068a.firebaseapp.com',
    projectId: 'twitter-clone-c068a',
    storageBucket: 'twitter-clone-c068a.appspot.com',
    messagingSenderId: '784250663758',
    appId: '1:784250663758:web:7079c24e1b0d4a55e8641f',
    measurementId: 'G-8CFPDKECED',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;