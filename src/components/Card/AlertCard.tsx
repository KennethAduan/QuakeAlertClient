import { Ionicons } from '@expo/vector-icons';
import { Box, VStack, HStack, Text } from '@gluestack-ui/themed';
import dayjs from 'dayjs';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CustomHeading from '../ui/CustomHeading';

interface AlertCardProps {
  status: string;
  date: any;
  location: string;
  evacuationArea: string;
}
const AlertCard = ({ status, date, location, evacuationArea }: AlertCardProps) => {
  const formattedDate = dayjs(date).format('MMMM DD, YYYY');
  const formattedTime = dayjs(date).locale('en').format('hh:mm A');
  return (
    <Box width={wp(90)} height={hp(20)} bgColor="#CCCDCD" borderRadius={wp(4)} my={hp(1)}>
      <VStack mx={wp(5)} mt={hp(1.2)} space="lg">
        <HStack justifyContent="space-between">
          <CustomHeading text="EARTHQUAKE DETAILS" textAlign="left" size={1.5} />
          <HStack space="sm">
            <Ionicons name="warning-outline" size={18} color="black" />
            <Text fontWeight="bold" color="red" size="sm">
              {status}
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent="space-between">
          <HStack space="sm">
            <Ionicons name="calendar-outline" size={20} color="black" />
            <Text size="sm" color="black">
              {formattedDate}
            </Text>
          </HStack>
          <HStack space="sm">
            <Ionicons name="time-outline" size={20} color="black" />
            <Text size="sm" color="black">
              {formattedTime}
            </Text>
          </HStack>
        </HStack>
        <Text size="sm" fontWeight="bold" color="black">
          Location:{' '}
          <Text size="sm" color="black">
            {location}
          </Text>
        </Text>
        <Text size="sm" fontWeight="bold" color="black">
          Evacuation Area:{' '}
          <Text size="sm" color="black">
            {evacuationArea}
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default AlertCard;
