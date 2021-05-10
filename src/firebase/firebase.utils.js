import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
  apiKey: "AIzaSyBKBVxKthG0K0V_11ElNC5lzyvnkdLSFE8",
  authDomain: "rexoraedu.firebaseapp.com",
  projectId: "rexoraedu",
  storageBucket: "rexoraedu.appspot.com",
  messagingSenderId: "628379866523",
  appId: "1:628379866523:web:0fde64e0cac862e25efd3e",
};




export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(firestore.doc('users/125fdes3213d233'));

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;