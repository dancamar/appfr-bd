import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBy6SXp8dn3F_GorZAUqphD2uvE3CL9qz4",
    authDomain: "fb-crud-13d87.firebaseapp.com",
    projectId: "fb-crud-13d87",
    storageBucket: "fb-crud-13d87.appspot.com",
    messagingSenderId: "151998173119",
    appId: "1:151998173119:web:b89a76c44c5fad2f929b0a"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();
