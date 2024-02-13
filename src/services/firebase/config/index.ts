import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAij5PcLcC75bA3xqtXFeAc4cJOCpSww7k',
  authDomain: 'modiform-81d5e.firebaseapp.com',
  projectId: 'modiform-81d5e',
  storageBucket: 'modiform-81d5e.appspot.com',
  messagingSenderId: '108128153866',
  appId: '1:108128153866:web:c1b253788a2ca6979b8af3',
  measurementId: 'G-GZ4TB4MGB5',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
