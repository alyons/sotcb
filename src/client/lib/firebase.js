import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmMvyNHKCl3gE-OGTgM814ug9uO_u1nMA",
  authDomain: "ffrpg3.firebaseapp.com",
  databaseURL: "https://ffrpg3-default-rtdb.firebaseio.com",
  projectId: "ffrpg3",
  storageBucket: "ffrpg3.appspot.com",
  messagingSenderId: "233213915417",
  appId: "1:233213915417:web:3f39cc3ddd5cc46c7b1588",
  measurementId: "G-WR8FW7Q7S7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
