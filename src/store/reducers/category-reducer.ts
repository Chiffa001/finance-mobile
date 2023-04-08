import {createReducer} from '@reduxjs/toolkit';

import {CategoryState} from '~/types/state/category-state';
import {TransactionTypes} from '~/types/transaction';

import {getAllCategories} from '../actions/category-actions';

const initialState: CategoryState = {
  [TransactionTypes.INCOME]: {
    list: null,
  },
  [TransactionTypes.EXPENSE]: {
    list: null,
  },
};

export const categoryReducer = createReducer(initialState, builder =>
  builder
    .addCase(getAllCategories.pending, (state, {meta}) => {
      state[meta.arg].inProgress = true;
    })
    .addCase(getAllCategories.rejected, (state, {error, meta}) => {
      state[meta.arg].inProgress = false;
      state[meta.arg].failed = true;
      state[meta.arg].error = error;
    })
    .addCase(getAllCategories.fulfilled, (state, {payload, meta}) => {
      state[meta.arg].inProgress = false;
      state[meta.arg].isDone = true;
      state[meta.arg].list = payload;
    }),
);
