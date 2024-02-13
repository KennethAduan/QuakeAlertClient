import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
const BackButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.back();
      }}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
