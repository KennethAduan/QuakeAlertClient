import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';

import ScheduledNotification from '~/src/components/Notification/ScheduledNotification';
import { db } from '~/src/services/firebase/config';

const useFetchNotification = () => {
  useEffect(() => {
    const alertRef = collection(db, 'alert');

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(alertRef, (snapshot) => {
      // Get only added documents
      const addedDocs = snapshot.docChanges().filter((change) => change.type === 'added');

      // Process each added document
      addedDocs.forEach((change) => {
        const { description, Location } = change.doc.data().data;

        console.log('Description:', description);
        console.log('Location:', Location);
        ScheduledNotification({ titleNotification: description, bodyNotification: Location });
      });
    });

    // Unsubscribe from real-time updates when component unmounts
    return () => unsubscribe();
  }, []); // Only run this effect once on component mount
};

export default useFetchNotification;
