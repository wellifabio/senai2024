import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCgYr2g3NyP0V7LtSS8tSuzDmxWA_FNhFE",
    authDomain: "pets-2024.firebaseapp.com",
    projectId: "pets-2024",
    storageBucket: "pets-2024.appspot.com",
    messagingSenderId: "346960568568",
    appId: "1:346960568568:web:eaffa20f6332b90fba9b0d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const auth = getAuth(app);

    export {db, auth};