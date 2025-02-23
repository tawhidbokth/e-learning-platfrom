// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCg6Udfk1TwM39tapFkzBUhU01tIjS9ksU',
  authDomain: 'e-learning-platfrom-4fd66.firebaseapp.com',
  projectId: 'e-learning-platfrom-4fd66',
  storageBucket: 'e-learning-platfrom-4fd66.firebasestorage.app',
  messagingSenderId: '645527300990',
  appId: '1:645527300990:web:97a07e156f70f85707612f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
