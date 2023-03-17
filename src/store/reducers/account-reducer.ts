import {createReducer} from '@reduxjs/toolkit';

import {AccountState} from '~/types/state/account-state';

import {getAllAccounts} from '../actions/account-actions';

const initial: AccountState = {
  list: null,
};

export const accountReducer = createReducer(initial, builder =>
  builder
    .addCase(getAllAccounts.pending, state => {
      state.inProgress = true;
    })
    .addCase(getAllAccounts.rejected, (state, action) => {
      state.inProgress = false;
      state.failed = true;
      state.error = action.error;
    })
    .addCase(getAllAccounts.fulfilled, (state, {payload}) => {
      state.inProgress = false;
      state.isDone = true;
      state.list = payload;
    }),
);
