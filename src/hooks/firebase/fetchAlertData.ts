/* eslint-disable no-unused-vars */
// File: '~/src/hooks/firebase/fetchAlertData.ts'

import { collection, query, orderBy, onSnapshot, Unsubscribe } from 'firebase/firestore';

import { db } from '~/src/services/firebase/config';

interface AlertData {
  data: {
    Location: string;
    SafetyEvacuation: string;
    status: string;
    Date: Date; // Assuming 'Date' is a field inside the 'data' object
  };
}

export const fetchAlertData = (callback: (data: AlertData[]) => void) => {
  const alertCollectionRef = collection(db, 'alert');
  const alertQuery = query(alertCollectionRef, orderBy('data.Date', 'desc'));
  let unsubscribe: Unsubscribe | null = null;
  const loading = true;

  unsubscribe = onSnapshot(alertQuery, (snapshot) => {
    const alertData: AlertData[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      alertData.push({
        data: {
          Location: data.data.Location,
          SafetyEvacuation: data.data.SafetyEvacuation,
          status: data.data.status,
          Date: data.data.Date.toDate(), // Convert Timestamp to JavaScript Date object
        },
      });
    });
    callback(alertData); // Pass the fetched data to the callback function
  });

  // Return unsubscribe function and loading state
  return { unsubscribe, loading };
};

export const unsubscribe = (unsubscribe: Unsubscribe) => {
  unsubscribe(); // Unsubscribe from snapshot listener
};
