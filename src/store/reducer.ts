import {combineReducers} from '@reduxjs/toolkit';
import userSlice from '../slices/user';
import orderSlice from '../slices/order';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  order: orderSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
