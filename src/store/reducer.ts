import {combineReducers} from '@reduxjs/toolkit';
import userSlice from '../slices/user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
