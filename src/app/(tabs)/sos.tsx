import { VStack } from '@gluestack-ui/themed';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SendRescueRequest from '~/src/components/Modal/SendRescueRequest';
import SendRescueRequestAmbulance from '~/src/components/Modal/SendRescueRequestAmbulance';
import { ScreenWrapper } from '~/src/components/layouts';

const Page = () => {
  return (
    <ScreenWrapper>
      <VStack space="2xl" mt={hp(15)}>
        <SendRescueRequest />
        <SendRescueRequestAmbulance />
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
