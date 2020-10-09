//import firebase from 'firebase';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA6ex8vpYEmLOJH-tMGpDLM2JLEfIHcuII",
    authDomain: "react-firebase-84021.firebaseapp.com",
    databaseURL: "https://react-firebase-84021.firebaseio.com",
    projectId: "react-firebase-84021",
    storageBucket: "react-firebase-84021.appspot.com",
    messagingSenderId: "719439529440",
    appId: "1:719439529440:web:b39191e87ead0434c91785"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);