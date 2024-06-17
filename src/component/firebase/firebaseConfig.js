// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  //read data from Firebase
} from 'firebase/auth';
//ref = reference to a "collection"
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
  child,
  get,
  onValue,
} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYZaZpUt-37w5RR5DZaByFjZnd8QP_To0',
  authDomain: 'foodapp-942df.firebaseapp.com',
  projectId: 'foodapp-942df',
  storageBucket: 'foodapp-942df.appspot.com',
  messagingSenderId: '294751979243',
  appId: '1:294751979243:android:6624d46109e3b76fb420ae',
  databaseURL:
    'https://foodapp-942df-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
const database = getFirestore();
export {
  auth,
  firebaseDatabase,
  database,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  firebaseSet,
  firebaseDatabaseRef,
  sendEmailVerification,
  child,
  get,
  onValue, //reload when online DB changed
  signInWithEmailAndPassword,
};
