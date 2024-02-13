import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />

      <Stack.Screen
        name="forgotPassword"
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default Layout;
