import { Box } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '~/src/constants/color';

interface ChildrenProps {
  children: React.ReactNode;
}

export function ScreenWrapper({ children }: ChildrenProps) {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} style="light" />
      <SafeAreaView>
        <Box mt={hp(2)} mx={wp(5)}>
          {children}
        </Box>
      </SafeAreaView>
    </>
  );
}
export function KeyboardScreenWrapper({
  children,
  offset = 60,
}: ChildrenProps & { offset?: number }) {
  return (
    <ScreenWrapper>
      <ScrollView automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={offset}>
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWrapper>
  );
}
