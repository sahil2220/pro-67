import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
  apiKey: "AIzaSyD4GDRZwVLL4W3Ai6B5P5fP3dNQ-U60k9g",
  authDomain: "team-voting-b21be.firebaseapp.com",
  projectId: "team-voting-b21be",
  storageBucket: "team-voting-b21be.appspot.com",
  messagingSenderId: "497470253819",
  appId: "1:497470253819:web:626637fee62cb177661e5e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();