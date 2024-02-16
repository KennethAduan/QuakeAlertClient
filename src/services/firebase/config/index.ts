import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB4aWu-09Xe7XbeODMrBBs5GXSHb6uwMyg',
  authDomain: 'quakealert-60811.firebaseapp.com',
  databaseURL: 'https://quakealert-60811-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'quakealert-60811',
  storageBucket: 'quakealert-60811.appspot.com',
  messagingSenderId: '599991955228',
  appId: '1:599991955228:web:962aa118b3d688933b14d9',
  measurementId: 'G-W00WXF2T9Q',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const rdb = getDatabase(app);

export { db, auth, rdb };
