import * as Notifications from 'expo-notifications';
import { Notification } from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';

import registerForPushNotificationsAsync from '../../utils/functions/expo/ExpoNotification';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function useNotificationTrigger() {
  const [expoPushToken, setExpoPushToken] = useState<string>('');
  const [notification, setNotification] = useState<Notification>();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token!));

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
  }, []);

  // console.log('Notifications', notification);
  // console.log('🚀 ~ useNotificationTrigger ~ expoPushToken:', expoPushToken);

  return { expoPushToken, notification };
}
