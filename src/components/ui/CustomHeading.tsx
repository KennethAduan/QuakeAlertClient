import React from 'react';
import { Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface CustomHeadingProps {
  text: string;
  size?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'auto';
  color?: string;
}

export default function CustomHeading({
  text,
  size = 5,
  textAlign = 'center',
  color = 'black',
}: CustomHeadingProps) {
  return (
    <Text
      style={{
        fontSize: hp(size),
        fontFamily: 'PoppinsBold',
        color,
        textAlign,
      }}>
      {text}
    </Text>
  );
}
