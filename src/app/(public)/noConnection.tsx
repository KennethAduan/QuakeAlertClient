import { VStack, Button, ButtonText } from '@gluestack-ui/themed';
import * as Updates from 'expo-updates';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { CustomHeading } from '../../components';
import { ScreenWrapper } from '../../components/layouts';
const Page = () => {
  return (
    <ScreenWrapper>
      <VStack mt={hp(10)}>
        <CustomHeading text="NO INTERNET CONNECTIONS" size={5} textAlign="left" />
        <Button
          onPress={() => {
            Updates.reloadAsync();
          }}>
          <ButtonText>Reload App</ButtonText>
        </Button>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
