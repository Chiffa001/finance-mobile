import {createReducer} from '@reduxjs/toolkit';

import {CurrencyState} from '~/types/state/currency-state';

import {getCurrencyList} from '../actions/currency-actions';

const initialState: CurrencyState = {
  list: null,
};

export const currencyReducer = createReducer(initialState, builder =>
  builder
    .addCase(getCurrencyList.pending, state => {
      state.inProgress = true;
    })
    .addCase(getCurrencyList.rejected, (state, {error}) => {
      state.inProgress = false;
      state.failed = true;
      state.error = error;
    })
    .addCase(getCurrencyList.fulfilled, (state, {payload}) => {
      state.inProgress = false;
      state.isDone = true;
      state.list = payload;
    }),
);
