import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-tWn61_Ezc01HRXZg4lrBeU6KPSe8PvU",
    authDomain: "crown-clothing-db-59d30.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-59d30.firebaseio.com",
    projectId: "crown-clothing-db-59d30",
    storageBucket: "crown-clothing-db-59d30.appspot.com",
    messagingSenderId: "916592022920",
    appId: "1:916592022920:web:0bc80b6f48390fec24163d",
    measurementId: "G-C27SWSCWQ5"
  };

  firebase.initializeApp(firebaseConfig)