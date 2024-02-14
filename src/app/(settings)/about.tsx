import { VStack, Text, ScrollView } from '@gluestack-ui/themed';
import React from 'react';
import {
  heightPercentageToDP as hp,
  //   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { CustomHeading } from '~/src/components';
import { ScreenWrapper } from '~/src/components/layouts';

const TextBody = (text: string) => {
  return <Text>{text}</Text>;
};
const Page = () => {
  return (
    <ScreenWrapper>
      <VStack mt={hp(7)} space="lg">
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeading
            text="Quake Alert is a mobile application that offers the following features:"
            size={2}
            textAlign="left"
          />

          <VStack>
            <CustomHeading text="Notification Alert: " size={2} textAlign="left" />
            {TextBody(
              'The app sends a notification message/post to the users and the earthquake details, such as location, date, time, and evacuation area.'
            )}
          </VStack>

          <VStack>
            <CustomHeading text="Report/Updates:" size={2} textAlign="left" />
            {TextBody(
              'The app provides updates on the ground motion and the earthquake situation, as well as tips on how to prepare and respond to an earthquake.'
            )}
          </VStack>

          <VStack>
            <CustomHeading text="Rescuer Access:" size={2} textAlign="left" />
            {TextBody(
              'The app also allows the user to access other useful resources such as evacuation centers, rescue services, and chat features.'
            )}
          </VStack>

          <VStack space="lg">
            {TextBody(
              'Quake Alert is designed to help you stay safe and informed during an earthquake, but it is not a substitute for official sources of information and guidance. Please follow the instructions of PHIVOLCS and other authorities in case of an earthquake.'
            )}

            {TextBody(
              'Quake Alert is not only a reliable and informative app, but also a user-friendly one. It has a simple and intuitive interface that allows you to access all the features easily and quickly. It also has a customizable settings menu that lets you adjust the app according to your preferences and needs.'
            )}
          </VStack>
          <VStack mt={hp(2)}>
            <CustomHeading text="Disclaimer: " size={2} textAlign="left" />
            {TextBody(
              'The app is only designed to specifically detect nearby earthquakes within a limited geographical region. It focuses on capturing seismic events that occur near its sensors. However, it cannot detect earthquakes that are farther away or outside its coverage area. This ensures that the system is optimized for monitoring a specific region but may not be suitable for detecting seismic activity on a larger scale.'
            )}
          </VStack>
        </ScrollView>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
