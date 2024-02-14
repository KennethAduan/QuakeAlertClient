import { collection, addDoc, Timestamp } from 'firebase/firestore';

import { db } from '../config';

interface requestDataProps {
  address: string;
  isWithAmbulance: boolean;
  name: string;
  contact: string;
  userId: string;
  status: string;
}

const SendRequest = async ({
  address,
  name,
  isWithAmbulance,
  contact,
  userId,
  status,
}: requestDataProps) => {
  const requestRef = collection(db, 'rescueRequest');
  const userData = {
    data: {
      address,
      name,
      isWithAmbulance,
      contact,
      date: Timestamp.now(),
      status,
      userId,
    }, // Use firebase.firestore.Timestamp.now()
    // Add other fields as needed
  };

  try {
    const docRef = await addDoc(requestRef, userData);
    console.log('Document added with ID: ', docRef.id);
    return { success: true };
  } catch (error: any) {
    console.error('Error adding document: ', error);
    return { success: false, error: error.message };
  }
};

export default SendRequest;
