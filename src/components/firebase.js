import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDrN1EOvlyASCHYqasjIarRkwszj8QBkZ4',
  authDomain: 'books-catalog-24a46.firebaseapp.com',
  projectId: 'books-catalog-24a46',
  storageBucket: 'books-catalog-24a46.appspot.com',
  messagingSenderId: '327824812370',
  appId: '1:327824812370:web:7039ebb80d371b03dcb28b',
  measurementId: 'G-0Q26BWM2MT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
