import React from 'react';
import { AlertNotificationRoot, ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import GluetStackProvider from './GluetStackProvider';
import ReduxProvider from './ReduxProvider';
import SplashScreenProvider from './SplashScreenProvider';
import { AuthContextProvider } from '../state/context/authContex';

import { NetworkInfo } from '~/src/hooks/netInfo/CheckInternetInfo';
import { ProviderProps } from '~/src/interfaces/providerInterfaces';
const AppProviders = ({ children }: ProviderProps) => {
  const isNetworkUnavailable = NetworkInfo();

  return (
    <ReduxProvider>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
