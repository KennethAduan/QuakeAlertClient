import { Ionicons } from '@expo/vector-icons';
import { Box, VStack, HStack, Text } from '@gluestack-ui/themed';
import dayjs from 'dayjs';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CustomHeading from '../ui/CustomHeading';

// L1 - white
// L2 - grey
// L3 - ligh blue
// L4 - blue
// L5 - green
// L6 - yellow
// L7 - dark orange
// L8 - red

interface AlertCardProps {
  status: string;
  date: any;
  location: string;
  evacuationArea: string;
}
const AlertCard = ({ status, date, location, evacuationArea }: AlertCardProps) => {
  let statusColorBg = '#CCCDCD';

  if (status === 'Level 1') {
    statusColorBg = '#CCCDCD';
  } else if (status === 'Level 2') {
    statusColorBg = '#b4b4b4';
  } else if (status === 'Level 3') {
    statusColorBg = 'lightblue';
  } else if (status === 'Level 4') {
    statusColorBg = 'blue';
  } else if (status === 'Level 5') {
    statusColorBg = 'lightgreen';
  } else if (status === 'Level 6') {
    statusColorBg = '#ffcc00';
  } else if (status === 'Level 7') {
    statusColorBg = 'orange';
  } else if (status === 'Level 8') {
    statusColorBg = 'red';
  }

  const formattedDate = dayjs(date).format('MMMM DD, YYYY');
  const formattedTime = dayjs(date).locale('en').format('hh:mm A');
  return (
    <Box width={wp(90)} height={hp(20)} bgColor={statusColorBg} borderRadius={wp(4)} my={hp(1)}>
      <VStack mx={wp(5)} mt={hp(1.2)} space="lg">
        <HStack justifyContent="space-between">
          <CustomHeading text="EARTHQUAKE DETAILS" textAlign="left" size={1.5} color="white" />
          <HStack space="sm">
            <Ionicons name="warning-outline" size={18} color="white" />
            <Text fontWeight="bold" color="white" size="sm">
              {status}
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack space="sm">
            <Ionicons name="calendar-outline" size={20} color="white" />
            <Text size="sm" color="white">
              {formattedDate}
            </Text>
          </HStack>
          <HStack space="sm">
            <Ionicons name="time-outline" size={20} color="white" />
            <Text size="sm" color="white">
              {formattedTime}
            </Text>
          </HStack>
        </HStack>
        <Text size="sm" fontWeight="bold" color="white">
          Location:{' '}
          <Text size="sm" color="white">
            {location}
          </Text>
        </Text>
        <Text size="sm" fontWeight="bold" color="white">
          Evacuation Area:{' '}
          <Text size="sm" color="white">
            {evacuationArea}
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default AlertCard;
