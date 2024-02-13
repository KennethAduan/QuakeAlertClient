import { VStack, Box, Text } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React, { useReducer, useState } from 'react';
import { Toast, ALERT_TYPE } from 'react-native-alert-notification';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { CustomButton, GlueStackInputField } from '~/src/components';
import { KeyboardScreenWrapper } from '~/src/components/layouts';
import { COLORS } from '~/src/constants/color';
import { images } from '~/src/constants/imgs';
import { useAuth } from '~/src/services/state/context/authContex';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  contactNo: '',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const handleInputChange = (field: any, value: any) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSignUp = async () => {
    // Perform validation
    const { firstName, lastName, email, password, confirmPassword, address, contactNo } = state;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !address ||
      !contactNo
    ) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Sign Up Failed',
        autoClose: true,
        textBody: 'Please fill in all fields.',
      });

      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    setLoading(true);
    const response = await signUp({ email, password, firstName, lastName, address, contactNo });

    console.log('The response', response);
    setLoading(false);
    if (!response.success) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Sign Up Failed',
        autoClose: true,
        textBody: response.message,
      });
    }
  };

  return (
    <KeyboardScreenWrapper>
      <Spinner visible={loading} color={COLORS.primary} />
      <VStack space="lg" mt={hp(2)}>
        <Image
          source={images.SignUpBanner}
          style={{
            width: wp(50),
            height: hp(20),
            alignSelf: 'center',
          }}
        />
        <Text fontFamily="PoppinsBold" textAlign="center" color="black" size="3xl">
          Sign Up
        </Text>
        <GlueStackInputField
          placeholder="Firstname"
          icon="person-outline"
          onChangeText={(value) => handleInputChange('firstName', value)}
          value={state.firstName}
        />
        <GlueStackInputField
          placeholder="Lastname"
          icon="person-outline"
          onChangeText={(value) => handleInputChange('lastName', value)}
          value={state.lastName}
        />
        <GlueStackInputField
          placeholder="Email"
          icon="mail-outline"
          onChangeText={(value) => handleInputChange('email', value)}
          value={state.email}
        />
        <GlueStackInputField
          placeholder="Password"
          icon="lock-closed-outline"
          secureTextEntry
          onChangeText={(value) => handleInputChange('password', value)}
          value={state.password}
        />
        <GlueStackInputField
          placeholder="Confirm Password"
          icon="lock-closed-outline"
          secureTextEntry
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
          value={state.confirmPassword}
        />
        <GlueStackInputField
          placeholder="Address"
          icon="location-outline"
          onChangeText={(value) => handleInputChange('address', value)}
          value={state.address}
        />
        <GlueStackInputField
          placeholder="Contact No."
          icon="call-outline"
          onChangeText={(value) => handleInputChange('contactNo', value)}
          value={state.contactNo}
        />
        <Box>
          <CustomButton title="Sign Up" buttonWidth={90} titleSize={2.3} onPress={handleSignUp} />
        </Box>
        <Link href="/signIn" style={{ alignSelf: 'center' }}>
          <Text fontFamily="PoppinsBold" color="gray" size="xs">
            Already have an account?{' '}
            <Text color={COLORS.primary} size="xs">
              Sign In
            </Text>
          </Text>
        </Link>
      </VStack>
    </KeyboardScreenWrapper>
  );
};

export default Page;
