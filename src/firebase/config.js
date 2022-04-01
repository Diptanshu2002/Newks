import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBed_the_Zaspx1V8dvyoVloji6w8f-q9c",
    authDomain: "newks-52c3a.firebaseapp.com",
    projectId: "newks-52c3a",
    storageBucket: "newks-52c3a.appspot.com",
    messagingSenderId: "132337394678",
    appId: "1:132337394678:web:a25a1be6320bd56faf5dd7"
  };
//initialize the web-app
const app = initializeApp(firebaseConfig);

//firestore database
const database = getFirestore(app)

const auth = getAuth()

export {database, auth}