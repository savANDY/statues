import { initializeApp } from 'firebase/app';
import {
  child,
  getDatabase,
  off,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  push,
  ref,
  get,
  increment,
  set,
  onValue
} from 'firebase/database';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
const firebase = initializeApp(config);
const db = getDatabase();
const auth = getAuth(firebase);

export {
  increment,
  auth,
  firebase,
  db,
  ref,
  get,
  set,
  push,
  child,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  off,
  onValue
};
