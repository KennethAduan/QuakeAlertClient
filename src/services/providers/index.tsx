import React from 'react';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import GluetStackProvider from './GluetStackProvider';
import ReduxProvider from './ReduxProvider';
import SplashScreenProvider from './SplashScreenProvider';
import { AuthContextProvider } from '../state/context/authContex';

import { ProviderProps } from '~/src/interfaces/providerInterfaces';
const AppProviders = ({ children }: ProviderProps) => {
  return (
    <ReduxProvider>
      <AuthContextProvider>
        <GluetStackProvider>
          <SplashScreenProvider>
            <AlertNotificationRoot>
              <>
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
