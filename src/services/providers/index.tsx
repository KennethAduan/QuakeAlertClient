import React from 'react';
import { AlertNotificationRoot, ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import GluetStackProvider from './GluetStackProvider';
import ReduxProvider from './ReduxProvider';
import SplashScreenProvider from './SplashScreenProvider';

import { NetworkInfo } from '~/src/hooks/netInfo/CheckInternetInfo';
import { ProviderProps } from '~/src/interfaces/providerInterfaces';
const AppProviders = ({ children }: ProviderProps) => {
  const isNetworkUnavailable = NetworkInfo();

  return (
    <ReduxProvider>
      <GluetStackProvider>
        <SplashScreenProvider>
          <AlertNotificationRoot>
            <>
              {isNetworkUnavailable &&
                Toast.show({
                  type: ALERT_TYPE.DANGER,
                  title: 'No Internet Connection',
                  autoClose: false,
                  textBody: 'Please check your internet connection and try again.',
                })}
              <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
            </>
          </AlertNotificationRoot>
        </SplashScreenProvider>
      </GluetStackProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
