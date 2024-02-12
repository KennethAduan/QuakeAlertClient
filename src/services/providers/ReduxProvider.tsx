import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../state/redux/store';

import { ProviderProps } from '~/src/interfaces/providerInterfaces';
const ReduxProvider = ({ children }: ProviderProps) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default ReduxProvider;
