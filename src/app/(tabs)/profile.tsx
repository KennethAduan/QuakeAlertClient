import { FontAwesome5 } from '@expo/vector-icons';
import { VStack, HStack, Divider, Text, Box } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { CustomHeading } from '~/src/components';
import { ScreenWrapper } from '~/src/components/layouts';
import { COLORS } from '~/src/constants/color';
import FetchUserData from '~/src/hooks/firebase/fetchUserData';
import { useAuth } from '~/src/services/state/context/authContex';

const TextFormatter = (text: string) => {
  return (
    <Text fontWeight="bold" color="black" size="lg">
      {text}
    </Text>
  );
};

const TextFormatterDetails = (text: string) => {
  return (
    <Text color="black" size="lg">
      {text}
    </Text>
  );
};

const Page = () => {
  const { value, loading } = FetchUserData();
  const { logout } = useAuth();

  const handleLogout = async () => {
    Dialog.show({
      type: ALERT_TYPE.WARNING,
      title: 'Logout',
      textBody: 'Are you sure you want to log out?',
      button: 'Continue',
      async onPressButton() {
        await logout();
        Dialog.hide();
      },
    });
  };
  // console.log(value?.data()?.firstName);
  const firstName = value?.data()?.firstName;
  const lastName = value?.data()?.lastName;
  const email = value?.data()?.email;
  const address = value?.data()?.address;
  const contactNo = value?.data()?.contactNo;
  const fullName = firstName + ' ' + lastName;

  return (
    <ScreenWrapper>
      <Spinner visible={loading} color={COLORS.primary} />
      <VStack space="lg">
        <Box alignSelf="center">
          <FontAwesome5 name="user-alt" size={wp(30)} color="black" />
        </Box>
        <CustomHeading text={fullName} size={2.2} />
        <Divider />
        {/* Email */}
        <HStack justifyContent="space-between">
          {TextFormatter('Email:')}
          {TextFormatterDetails(email)}
        </HStack>
        {/* Address */}
        <HStack justifyContent="space-between">
          {TextFormatter('Address:')}
          {TextFormatterDetails(address)}
        </HStack>
        {/* Contact No */}
        <HStack justifyContent="space-between">
          {TextFormatter('Contact No:')}
          {TextFormatterDetails(contactNo)}
        </HStack>
        <VStack space="xl">
          <Link href="/editProfile" asChild>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: COLORS.black,
                borderRadius: wp(3.2),
                height: hp(5),
                justifyContent: 'center',
              }}>
              <Text textAlign="center" fontWeight="bold" color="black" size="lg">
                Edit Profile
              </Text>
            </TouchableOpacity>
          </Link>
          <Link href="/settings" asChild>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: COLORS.black,
                borderRadius: wp(3.2),
                height: hp(5),
                justifyContent: 'center',
              }}>
              <Text textAlign="center" fontWeight="bold" color="black" size="lg">
                Settings
              </Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              borderWidth: 1,
              borderColor: COLORS.black,
              borderRadius: wp(3.2),
              height: hp(5),
              justifyContent: 'center',
            }}>
            <Text textAlign="center" fontWeight="bold" color="black" size="lg">
              Logout
            </Text>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
