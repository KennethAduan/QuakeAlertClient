import { View, ActivityIndicator } from 'react-native';

import { COLORS } from '../constants/color';
const Main = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default Main;
