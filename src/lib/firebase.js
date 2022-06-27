import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYhd6tynSFrHDVQ_c4Cv5OQh9ofc0qHzs",
    authDomain: "fir-sample-e961a.firebaseapp.com",
    projectId: "fir-sample-e961a",
    storageBucket: "fir-sample-e961a.appspot.com",
    messagingSenderId: "928393098919",
    appId: "1:928393098919:web:cb986fd09746fb4728cd82"
};

firebase.initializeApp(firebaseConfig) 