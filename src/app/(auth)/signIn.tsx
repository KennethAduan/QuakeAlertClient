import { VStack, Box, Text } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React, { useState } from 'react';
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

const Page = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    if (!email && !password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Sign In Failed',
        autoClose: true,
        textBody: 'Please fill in all fields.',
      });
    }
    setLoading(true);
    const response = await signIn({ email, password });
    setLoading(false);

    console.log(response);
    if (!response.success) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Sign In Failed',
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
          source={images.SignInBanner}
          style={{
            width: wp(70),
            height: hp(30),
            alignSelf: 'center',
          }}
        />
        <Text fontFamily="PoppinsBold" textAlign="center" color="black" size="3xl">
          Sign In
        </Text>
        {/* Email */}
        <GlueStackInputField
          placeholder="Email"
          icon="mail-outline"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {/* Password */}
        <GlueStackInputField
          placeholder="Password"
          icon="lock-closed-outline"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* Forgot Password */}
        <Link href="/forgotPassword" style={{ alignSelf: 'flex-end' }}>
          <Text color="gray" size="xs" fontFamily="PoppinsBold">
            Forgot Password?
          </Text>
        </Link>

        <Box>
          <CustomButton title="Sign In" buttonWidth={90} titleSize={2.3} onPress={handleSignIn} />
        </Box>
        <Link href="/signUp" style={{ alignSelf: 'center' }}>
          <Text fontFamily="PoppinsBold" color="gray" size="xs">
            Don't have an account?{' '}
            <Text color={COLORS.primary} size="xs">
              Sign Up
            </Text>
          </Text>
        </Link>
      </VStack>
    </KeyboardScreenWrapper>
  );
};

export default Page;
