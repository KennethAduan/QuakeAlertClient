// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
const rootReducers = combineReducers({
  user: userSlice,
});

export default rootReducers;
