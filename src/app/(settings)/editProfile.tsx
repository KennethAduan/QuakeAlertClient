import { VStack, Text } from '@gluestack-ui/themed';
import { updateDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Toast, ALERT_TYPE } from 'react-native-alert-notification';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { GlueStackInputField, CustomHeading } from '~/src/components';
import { KeyboardScreenWrapper } from '~/src/components/layouts';
import { COLORS } from '~/src/constants/color';
import FetchUserData from '~/src/hooks/firebase/fetchUserData';
import { db } from '~/src/services/firebase/config';
const Page = () => {
  const { value, loading } = FetchUserData();
  const userId = value?.data()?.userId;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isloading, setLoading] = useState(false);

  const handleSaveProfile = async () => {
    if (firstName === '' && lastName === '' && address === '' && contactNo === '') {
      // If all fields are empty, do not update
      return;
    }

    const userDocRef = doc(db, 'users_dummy', userId);

    // Data to update
    const newData = {
      firstName: firstName !== '' ? firstName : value?.data()?.firstName,
      lastName: lastName !== '' ? lastName : value?.data()?.lastName,
      address: address !== '' ? address : value?.data()?.address,
      contactNo: contactNo !== '' ? contactNo : value?.data()?.contactNo,
    };

    // Update the document
    try {
      setLoading(true);
      await updateDoc(userDocRef, newData);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Update Success',
        autoClose: true,
        textBody: 'Profile updated successfully',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Update failed',
        autoClose: true,
        textBody: 'Something went wrong!',
      });
      console.error('Error updating document:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardScreenWrapper>
      <Spinner visible={loading} color={COLORS.primary} />
      <Spinner visible={isloading} color={COLORS.primary} />
      <VStack mt={hp(10)} space="lg">
        {/* First name */}
        <VStack>
          <CustomHeading text="First Name" size={2} textAlign="left" />
          <GlueStackInputField
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder={value?.data()?.firstName}
          />
        </VStack>
        {/* Last name */}
        <VStack>
          <CustomHeading text="Last Name" size={2} textAlign="left" />
          <GlueStackInputField
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder={value?.data()?.lastName}
          />
        </VStack>
        {/* Email */}
        <VStack>
          <CustomHeading text="Email" size={2} textAlign="left" />
          <GlueStackInputField
            value={email}
            onChangeText={(text) => setEmail(text)}
            readonly
            placeholder={value?.data()?.email}
          />
        </VStack>
        {/* Address */}
        <VStack>
          <CustomHeading text="Address" size={2} textAlign="left" />
          <GlueStackInputField
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder={value?.data()?.address}
          />
        </VStack>
        {/* Contact No */}
        <VStack>
          <CustomHeading text="Contact No" size={2} textAlign="left" />
          <GlueStackInputField
            value={contactNo}
            onChangeText={(text) => setContactNo(text)}
            placeholder={value?.data()?.contactNo}
            keyboard="number-pad"
          />
        </VStack>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: hp(5),
            justifyContent: 'center',
            borderRadius: wp(2),
          }}
          onPress={handleSaveProfile}>
          <Text color="white" textAlign="center" size="lg" fontFamily="PoppinsBold">
            Save Profile
          </Text>
        </TouchableOpacity>
      </VStack>
    </KeyboardScreenWrapper>
  );
};

export default Page;
