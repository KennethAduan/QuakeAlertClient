import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useEffect } from 'react';

export function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true;

    function redirect(notification: Notifications.Notification) {
      const url = notification.request.content.data?.url;

      if (url) {
        console.log('Redirecting to URL:', url); // Debugging log
        router.replace(url);
      } else {
        console.log('No URL found in notification data'); // Debugging log
      }
    }

    console.log('Getting last notification response'); // Debugging log
    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        console.log('No notification response or not mounted'); // Debugging log
        return;
      }
      console.log('Redirecting from last notification response'); // Debugging log
      redirect(response?.notification);
    });

    console.log('Adding notification response received listener'); // Debugging log
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('Notification response received'); // Debugging log
      redirect(response.notification);
    });

    return () => {
      isMounted = false;
      console.log('Removing notification response received listener'); // Debugging log
      subscription.remove();
    };
  }, []);
  // console.log('Use notification is being executed'); // Debugging log
}
