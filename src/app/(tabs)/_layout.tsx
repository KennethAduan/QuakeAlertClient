import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { COLORS } from '~/src/constants/color';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: {
          fontFamily: 'PoppinsBold',
          // marginBottom: hp(0.1),
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerShown: true,
        headerTintColor: COLORS.white,
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        // headerTransparent: true,
        // headerRight: () => <LogoRightSide />,
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
              <MaterialCommunityIcons name="bell-ring" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons name="bell-ring-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerRight: () => (
            <Link asChild href="/about">
              <TouchableOpacity
                style={{
                  marginRight: 15,
                }}>
                <Ionicons name="information-circle-outline" size={30} color="white" />
              </TouchableOpacity>
            </Link>
          ),
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
