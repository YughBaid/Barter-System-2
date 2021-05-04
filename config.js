import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB8UAAGe9QdgoyV-jfC6u1xRQIS0q89zRM",
    authDomain: "barter-system-b4b9f.firebaseapp.com",
    projectId: "barter-system-b4b9f",
    storageBucket: "barter-system-b4b9f.appspot.com",
    messagingSenderId: "30841709435",
    appId: "1:30841709435:web:307e660e73c645395553de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();