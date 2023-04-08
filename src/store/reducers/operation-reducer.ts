import {createReducer} from '@reduxjs/toolkit';

import {OperationState} from '~/types/state/operation-state';

import {addOperation, getOperationInfo} from '../actions/operation-actions';

const initial: OperationState = {};

export const operationReducer = createReducer(initial, builder =>
  builder
    .addCase(getOperationInfo.pending, (state, {meta}) => {
      state[meta.arg] = {list: null};
      state[meta.arg].inProgress = true;
    })
    .addCase(getOperationInfo.rejected, (state, {error, meta}) => {
      state[meta.arg].inProgress = false;
      state[meta.arg].failed = true;
      state[meta.arg].error = error;
    })
    .addCase(getOperationInfo.fulfilled, (state, {payload, meta}) => {
      state[meta.arg].inProgress = false;
      state[meta.arg].isDone = true;
      state[meta.arg].list = payload.operations;
      state[meta.arg].total = payload.total;
    })
    .addCase(addOperation.pending, state => {
      state.sending = true;
    })
    .addCase(addOperation.rejected, (state, {error}) => {
      state.sending = false;
      state.sendingError = error;
    })
    .addCase(addOperation.fulfilled, state => {
      state.sending = false;
    }),
);
