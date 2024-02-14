import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BackButton from '~/src/components/Button/BackButton';
import { images } from '~/src/constants/imgs';

const Layout = () => {
  const LogoRightSide = () => {
    return (
      <Image
        source={images.logoBanner}
        style={{
          height: hp(4),
          width: wp(10),
        }}
      />
    );
  };
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerLeft: () => <BackButton />,
        headerRight: () => <LogoRightSide />,
      }}>
      <Stack.Screen
        name="editProfile"
        options={{
          title: 'Edit Profile',
          animation: 'ios',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
          animation: 'ios',
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: 'About',
          animation: 'ios',
        }}
      />
    </Stack>
  );
};

export default Layout;
