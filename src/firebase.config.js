import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj4m9ywNWGXlbfnJ2zGQk3g-LE2uUXGT4',
  authDomain: 'puncochacky-1ff94.firebaseapp.com',
  projectId: 'puncochacky-1ff94',
  storageBucket: 'puncochacky-1ff94.appspot.com',
  messagingSenderId: '665328163668',
  appId: '1:665328163668:web:3fab5593d060dc92ac06c1',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
