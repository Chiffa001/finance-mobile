import {createReducer} from '@reduxjs/toolkit';

import {AuthState} from '~/types/state/auth-state';

import {logIn} from '../actions/auth-actions';

const initial: AuthState = {
  isAuth: false,
};

export const authReducer = createReducer(initial, builder =>
  builder
    .addCase(logIn.pending, state => {
      state.inProgress = true;
    })
    .addCase(logIn.fulfilled, state => {
      state.inProgress = false;
      state.isDone = true;
      state.isAuth = true;
    })
    .addCase(logIn.rejected, (state, action) => {
      state.inProgress = false;
      state.failed = true;
      state.error = action.error;
    }),
);
