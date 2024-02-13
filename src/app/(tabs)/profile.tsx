import { View, Text, TouchableOpacity } from 'react-native';
import { VStack, HStack } from '@gluestack-ui/themed';
import React from 'react';
import { ScreenWrapper } from '~/src/components/layouts';
import { useAuth } from '~/src/services/state/context/authContex';

const Page = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <ScreenWrapper>
      <VStack mt={50}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
