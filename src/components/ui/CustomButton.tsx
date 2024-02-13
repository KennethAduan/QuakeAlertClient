import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLORS } from 'src/constants/color';
interface Props {
  onPress?: () => void;
  title: string;
  buttonWidth?: number;
  buttonHeight?: number;
  titleSize?: number;
  padding?: number;
  backgroundColor?: string;
  transparent?: boolean;
  textColor?: string;
  isShadow?: boolean;
}

const CustomButton = (props: Props) => {
  const {
    onPress,
    title,
    buttonWidth = 25,
    buttonHeight = 5,
    titleSize = 15,
    padding = 0,
    transparent = false,
    textColor = COLORS.white,
    isShadow = false,
  } = props;

  const backgroundColor = transparent ? 'transparent' : props.backgroundColor || COLORS.primary;
  const borderWidth = transparent ? 1 : 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor,
            width: wp(buttonWidth),
            height: hp(buttonHeight),
            borderWidth,
            borderColor: COLORS.primary,
            shadowColor: isShadow ? '#000' : 'transparent',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: isShadow ? 0.25 : 0,
            shadowRadius: isShadow ? 3.84 : 0,
            elevation: isShadow ? 5 : 0,
          },
        ]}>
        <Text
          style={[
            styles.buttonText,
            { fontSize: hp(titleSize), padding, color: textColor, fontFamily: 'PoppinsBold' },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  buttonText: {
    fontFamily: 'PoppinsRegular',
    color: 'white',
  },
});

export default CustomButton;
