import NetInfo from '@react-native-community/netinfo';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

export const NetworkInfo = () => {
  const [isPushed, setIsPushed] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected === false && !isPushed) {
        console.log('Not Connected');
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'No Internet Connection',
          autoClose: true,
          textBody: 'Please check your internet connection and try again.',
        });
        router.push('/noConnection');
        setIsPushed(true); // Set flag to true after pushing to prevent multiple pushes
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isPushed]);

  return null; // Component doesn't render anything, just handles side effects
};
