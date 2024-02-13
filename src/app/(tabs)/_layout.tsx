import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { images } from '~/src/constants/imgs';

const Layout = () => {
  const LogoRightSide = () => {
    return (
      <Image
        source={images.logoBanner}
        style={{
          height: hp(4),
          width: wp(10),
          marginRight: wp(5),
        }}
      />
    );
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          fontFamily: 'PoppinsBold',
          // marginBottom: hp(0.1),
        },
        // headerShown: false,
        headerTransparent: true,
        headerRight: () => <LogoRightSide />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',

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
          title: 'Profile',

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
