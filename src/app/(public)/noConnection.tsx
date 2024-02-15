import { VStack, Button, ButtonText } from '@gluestack-ui/themed';
import NetInfo from '@react-native-community/netinfo';
import { router } from 'expo-router';
import React, { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { CustomHeading } from '../../components';
import { ScreenWrapper } from '../../components/layouts';

import { COLORS } from '~/src/constants/color';

const Page = () => {
  const [loading, setLoading] = useState(false);

  const handleReloadApp = () => {
    setLoading(true);
    NetInfo.fetch().then((state) => {
      if (state.isConnected === true) {
        router.back();
      }
      setLoading(false); // Moved setLoading inside the then block
    });
  };

  return (
    <ScreenWrapper>
      <Spinner visible={loading} color={COLORS.primary} />
      <VStack mt={hp(10)}>
        <CustomHeading text="NO INTERNET CONNECTIONS" size={5} textAlign="left" />
        <Button onPress={handleReloadApp}>
          <ButtonText>Reload App</ButtonText>
        </Button>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
