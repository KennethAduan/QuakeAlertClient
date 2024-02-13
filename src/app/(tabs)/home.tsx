import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '~/src/services/state/context/authContex';
import { ScreenWrapper } from '~/src/components/layouts';
const Page = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <ScreenWrapper>
      <View>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Page;
