import { Stack } from 'expo-router';

import AppProviders from '../services/providers';
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <AppProviders>
      <_layout />
    </AppProviders>
  );
}

function _layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
