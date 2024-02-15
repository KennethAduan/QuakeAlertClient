import axios from 'axios';

import { useAuth } from '~/src/services/state/context/authContex';

interface AuthProps {
  tokenResponse: string;
}

const SendNotificationToken = ({ tokenResponse }: AuthProps) => {
  const { user } = useAuth();
  const user_id: string = user.uid;

  //   console.log('🚀 ~ SendNotificationToken ~ tokenResponse:', tokenResponse);
  //   console.log('🚀 ~ SendNotificationToken ~ user_id:', user_id);

  const requestData = {
    userId: user_id,
    token: tokenResponse,
  };

  axios
    .post('https://quake-alert-server.vercel.app/api/notifyclient/registerPushToken', requestData)
    .then((response) => {
      console.log('Push token registered successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error registering push token:', error.response || error.message);
    });
};

export default SendNotificationToken;
