import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { View, Text } from 'react-native';
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          fontFamily: 'PoppinsBold',
          // marginBottom: hp(0.1),
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'HOME',

          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="sos"
        options={{
          title: 'SOS',

          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="notifications-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',

          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="person-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
