import { VStack, Box, Text } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
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
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Sign In Failed',
        autoClose: true,
        textBody: 'Please fill Email.',
      });
    }
    setLoading(true);
    const response = await resetPassword(email);
    setLoading(false);
    if (response.success) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Reset Password Success',
        autoClose: true,
        textBody: 'Please check your email to reset your password',
      });
    }
  };
  return (
    <KeyboardScreenWrapper>
      <Spinner visible={loading} color={COLORS.primary} />

      <VStack space="lg">
        <Image
          source={images.forgotPasswordBanner}
          style={{
            width: wp(70),
            height: hp(30),
            alignSelf: 'center',
          }}
        />
        <Text fontFamily="PoppinsBold" textAlign="center" color="black" size="2xl">
          Reset Password
        </Text>

        {/* Email */}
        <GlueStackInputField
          placeholder="Email"
          icon="mail-outline"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text size="sm" textAlign="justify">
          Please input your email address to reset your password
        </Text>
        <Box>
          <CustomButton
            onPress={handleResetPassword}
            title="Reset"
            buttonWidth={90}
            titleSize={2.3}
          />
        </Box>
      </VStack>
    </KeyboardScreenWrapper>
  );
};

export default Page;
