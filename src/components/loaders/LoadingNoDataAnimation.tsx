import { Box } from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ScreenWrapper } from '../layouts';

const LoadingNoDataAnimation = () => {
  return (
    <ScreenWrapper>
      <Box justifyContent="center" flex={1} mt={hp(40)}>
        <LottieView
          source={require('../../../assets/json/NoDataAnimation.json')}
          autoPlay
          loop
          style={{
            width: wp(70),
            height: hp(50),
            alignSelf: 'center',
          }}
        />
      </Box>
    </ScreenWrapper>
  );
};

export default LoadingNoDataAnimation;
