import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

import { NetworkInfo } from '../hooks/netInfo/CheckInternetInfo';
import useFetchNotification from '../hooks/notifications/fetchNotification';
// import { useNotificationObserver } from '../hooks/notifications/useNotificationObserver';
import AppProviders from '../services/providers';
import { useAuth } from '../services/state/context/authContex';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

export default function RootLayout() {
  return (
    <AppProviders>
      <MainLayout />
    </AppProviders>
  );
}

function MainLayout() {
  NetworkInfo();
  useFetchNotification();
  // useNotificationObserver();

  const { isAuthenticated } = useAuth();

  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated === undefined) {
      return;
    }

    const inApp = segments[0] === '(tabs)';

    if (isAuthenticated && !inApp) {
      router.replace('/home');
    } else if (isAuthenticated === false) {
      router.replace('/signIn');
    }
  }, [isAuthenticated]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(public)/noConnection" />

      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(settings)" />
    </Stack>
  );
}
