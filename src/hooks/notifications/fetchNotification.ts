import { ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

import ScheduledNotification from '~/src/components/Notification/ScheduledNotification';
import { rdb } from '~/src/services/firebase/config';

const useFetchNotification = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [previousStatus, setPreviousStatus] = useState(null); // Track previous status

  useEffect(() => {
    const statusRef = ref(rdb, 'test');

    const unsubscribe = onValue(statusRef, (snapshot) => {
      const status = snapshot.val();
      console.log('Status:', status);

      // Compare current status with previous status
      if (!previousStatus || JSON.stringify(previousStatus) !== JSON.stringify(status)) {
        // Accessing nested fields correctly
        const { date, level, time, location } = status?.detected?.status ?? {};
        console.log('Date:', date);
        console.log('Level:', level);
        console.log('Time:', time);
        const headerTitle = level + ' ' + location;
        setTitle(headerTitle);
        setBody(date);

        // Update previous status
        setPreviousStatus(status);
      }
    });

    // Unsubscribe when component unmounts or when dependencies change
    return () => unsubscribe();
  }, [previousStatus]); // useEffect dependency

  // Schedule notification whenever title or body changes
  useEffect(() => {
    if (title && body) {
      ScheduledNotification({ titleNotification: title, bodyNotification: body });
    }
  }, [title, body]);
  console.log(title);
  return null; // Return null or use the retrieved data as needed in your component
};

export default useFetchNotification;
