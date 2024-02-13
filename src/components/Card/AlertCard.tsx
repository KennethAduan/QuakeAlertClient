import { Box, VStack, HStack, Text } from '@gluestack-ui/themed';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import dayjs from 'dayjs';
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
          <Text fontWeight="bold" color="red" size="xs">
            {status}
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text size="sm" fontWeight="bold" color="black">
            Date:{' '}
            <Text size="sm" color="black">
              {formattedDate}
            </Text>
          </Text>
          <Text size="sm" fontWeight="bold" color="black">
            Time:{' '}
            <Text size="sm" color="black">
              {formattedTime}
            </Text>
          </Text>
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
