import {
  VStack,
  Text,
  HStack,
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
  RadioLabel,
  Divider,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ScreenWrapper } from '~/src/components/layouts';
import { COLORS } from '~/src/constants/color';
import useNotificationTrigger from '~/src/hooks/notifications/notificationTrigger';
const Page = () => {
  // Notification
  const { isEnableNotif, setIsEnableNotif } = useNotificationTrigger(); // Call the useNotificationTrigger hook

  const toggleNotification = () => {
    setIsEnableNotif((prevState) => !prevState); // Toggle the isEnableNotif state
  };
  // Sounds
  const [isEnabledSound, setIsEnabledSound] = useState(false);
  const toggleSwitchSound = () => setIsEnabledSound((previousState) => !previousState);
  // Vibrate
  const [isEnabledVibrate, setIsEnabledVibrate] = useState(false);
  const toggleSwitchVibrate = () => setIsEnabledVibrate((previousState) => !previousState);
  const [values, setValues] = React.useState('Eng');
  return (
    <ScreenWrapper>
      <VStack mt={hp(5)}>
        {/* Notification */}
        <VStack space="lg">
          <HStack alignItems="center" justifyContent="space-between" mt={hp(2)}>
            <Text size="lg" fontFamily="PoppinsBold" color="black">
              Notification
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnableNotif ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleNotification}
              value={isEnableNotif}
            />
          </HStack>
          {isEnableNotif && (
            <>
              <RadioGroup value={values} onChange={setValues}>
                <VStack space="xl">
                  <Radio value="Eng">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Notify only in critical situation</RadioLabel>
                  </Radio>
                  <Radio value="Fre">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Notify in all situation</RadioLabel>
                  </Radio>
                </VStack>
              </RadioGroup>
            </>
          )}
        </VStack>
        {/* Sound */}
        <Divider mt={hp(2)} />
        <HStack alignItems="center" justifyContent="space-between" mt={hp(2)}>
          <Text size="lg" fontFamily="PoppinsBold" color="black">
            Sound
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabledSound ? COLORS.primary : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchSound}
            value={isEnabledSound}
          />
        </HStack>
        {/* Vibrate */}
        <Divider mt={hp(2)} />
        <HStack alignItems="center" justifyContent="space-between" mt={hp(2)}>
          <Text size="lg" fontFamily="PoppinsBold" color="black">
            Vibrate
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabledVibrate ? COLORS.primary : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchVibrate}
            value={isEnabledVibrate}
          />
        </HStack>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
