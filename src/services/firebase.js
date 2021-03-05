import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBLhXYSazRjc7kX1Qgp6Pm-MhD2RKuNC6M',
  authDomain: 'supporteo.firebaseapp.com',
  projectId: 'supporteo',
  storageBucket: 'supporteo.appspot.com',
  messagingSenderId: '911595954684',
  appId: '1:911595954684:web:38b92c44d7fb6959a71279',
  measurementId: 'G-CRVX1Z028K',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
