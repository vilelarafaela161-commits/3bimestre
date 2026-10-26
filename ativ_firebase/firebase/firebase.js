import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6kUV5D6PBEwah4Of3nDJ0olAyQvGdqeM',
  authDomain: 'bimestre-cd875.firebaseapp.com',
  projectId: 'bimestre-cd875',
  storageBucket: 'bimestre-cd875.firebasestorage.app',
  messagingSenderId: '898570056388',
  appId: '1:898570056388:web:bd409e4edc77e2ba4a9247',
  measurementId: 'G-L6NXV2FYTF',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
