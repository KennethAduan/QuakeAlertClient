import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
const checkInternetConnection = (callback: (isConnected: boolean) => void) => {
  return NetInfo.addEventListener((state) => {
    const isConnected = state.isConnected ?? false;
    callback(isConnected);
  });
};

export const NetworkInfo = () => {
  const [showNetwork, setShowNetwork] = useState(false);
  useEffect(() => {
    const unsubscribe = checkInternetConnection((isConnected) => {
      if (!isConnected) {
        setShowNetwork(true);
      }
    });

    return () => {
      unsubscribe(); // Call the unsubscribe function when the component is unmounted
    };
  }, []);

  return showNetwork;
};
