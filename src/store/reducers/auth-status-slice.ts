import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthState} from '~/types/state/auth-state';

const initialState: AuthState = {
  isAuth: false,
};

const authStatusSlice = createSlice({
  name: 'authStatus',
  initialState,
  reducers: {
    setAuth(state, {payload}: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
  },
});

export const {
  reducer: authStatusReducer,
  actions: {setAuth},
  name: authStatusName,
} = authStatusSlice;
