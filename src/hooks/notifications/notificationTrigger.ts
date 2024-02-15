import * as Notifications from 'expo-notifications';
import { Notification } from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';

import registerForPushNotificationsAsync from '../../utils/functions/expo/ExpoNotification';

import { useAppDispatch } from '~/src/services/state/redux/hooks';
import { UserInfoRedux } from '~/src/services/state/redux/slices/userSlice';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function useNotificationTrigger() {
  const dispatch = useAppDispatch();
  const [expoPushToken, setExpoPushToken] = useState<string>('');
  const [notification, setNotification] = useState<Notification>();
  const [isEnableNotif, setIsEnableNotif] = useState(true); // Add state for notification switch
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    const registerForPushNotifications = async () => {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token!);
      dispatch(UserInfoRedux({ tokenResponse: token }));
    };

    if (isEnableNotif) {
      registerForPushNotifications(); // Register for push notifications when notification switch is enabled
    }

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    notificationListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log('response received');
        console.log('Response Notification: ', response);
      }
    );

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, [isEnableNotif]); // Include isEnableNotif in the dependency array

  // Rest of your code...

  return { expoPushToken, notification, isEnableNotif, setIsEnableNotif }; // Return isEnableNotif and setIsEnableNotif
}
