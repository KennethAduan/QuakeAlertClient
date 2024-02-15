import NetInfo from '@react-native-community/netinfo';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
export const NetworkInfo = () => {
  // const [showNetwork, setShowNetwork] = useState(false);
  const unsubscribe = NetInfo.addEventListener((state) => {
    if (state.isConnected === false) {
      console.log('Not Connected');
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'No Internet Connection',
        autoClose: false,
        textBody: 'Please check your internet connection and try again.',
      });
      router.replace('/noConnection');
      // Alert.alert('No Internet connection', 'Please reconnect to your', [
      //   {
      //     text: 'Reload app',
      //     onPress: () => Updates.reloadAsync(),
      //   },
      // ]);
    } else if (state.isConnected === true) {
      console.log('Connected');
    }
  });
  useEffect(() => {
    unsubscribe();
  }, []);
};
