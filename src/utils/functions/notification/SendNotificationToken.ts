import axios from 'axios';
import { useState, useEffect } from 'react';

import { useAuth } from '~/src/services/state/context/authContex';
import { useAppSelector } from '~/src/services/state/redux/hooks';

const SendNotificationToken = () => {
  const { user } = useAuth();
  const user_id: string = user!.uid;
  const { tokenResponse } = useAppSelector((state) => state.user);
  const [isTokenReady, setTokenReady] = useState(false);

  useEffect(() => {
    if (tokenResponse) {
      setTokenReady(true);
    }
  }, [tokenResponse]);

  const sendPushNotification = async () => {
    const requestData = {
      userId: user_id,
      token: tokenResponse,
    };

    try {
      const response = await axios.post(
        'https://quake-alert-server.vercel.app/api/notifyclient/registerPushToken',
        requestData
      );
      console.log('Push token registered successfully:', response.data);
    } catch (error: any) {
      console.error('Error registering push token:', error.response || error.message);
    }
  };

  useEffect(() => {
    if (isTokenReady) {
      sendPushNotification();
    }
  }, [isTokenReady]);

  return null; // You can return any JSX or null if this component doesn't render anything
};

export default SendNotificationToken;
