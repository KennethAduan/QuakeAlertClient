import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '~/src/services/state/context/authContex';
const Page = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
