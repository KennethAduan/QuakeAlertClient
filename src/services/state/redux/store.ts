// store/index.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducers from './rootReducers';
// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Add any blacklist or whitelist configuration if needed
};
// Wrap the user reducer with the persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disables serializable check
    }),
});

// Create the persisted store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
