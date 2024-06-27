const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyB9Ks-IYtUU29mcZJo_Tht2WdjSf_K7CQU",
  authDomain: "api-test-427120.firebaseapp.com",
  projectId: "gmail-api-test-427120",
  storageBucket: "gmail-api-test-427120.appspot.com",
  messagingSenderId: "351616001587",
  appId: "1:351616001587:web:c407a7390f6ad22eb36546",
  measurementId: "G-6LF9ZNNJNZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");

module.exports = User;
