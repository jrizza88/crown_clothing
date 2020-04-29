import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-tWn61_Ezc01HRXZg4lrBeU6KPSe8PvU",
    authDomain: "crown-clothing-db-59d30.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-59d30.firebaseio.com",
    projectId: "crown-clothing-db-59d30",
    storageBucket: "crown-clothing-db-59d30.appspot.com",
    messagingSenderId: "916592022920",
    appId: "1:916592022920:web:0bc80b6f48390fec24163d",
    measurementId: "G-C27SWSCWQ5"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if the userAuth object does not exist. 
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    console.log('snapshot: ', snapShot)
    console.log('firestore: ', firestore.doc(`users/${userAuth.uid}`))

    if(!snapShot.exists) {
        const { displayName,  email } = userAuth;
        // informs you when this was invoked
        const createdAt = new Date()
      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (err) {
        console.log('error creating user', err.message)
      }
    }
    return snapShot
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  // firestore.collection('users').doc('userspecificID').collection('cartItems').doc('cartItemsspecificID')
  // firestore.doc('/users/docID/cartItems/cartItemsID')
    // firestore.collection('/users/docID/cartItems/')