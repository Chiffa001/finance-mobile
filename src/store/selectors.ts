import {createSelector} from '@reduxjs/toolkit';

import {ApplicationState} from './store';

export const selectOperationData = (accountId: number) =>
  createSelector(
    (state: ApplicationState) => state.operation,
    state => state[accountId] ?? {},
  );

export const selectAccount = (accountId: number) =>
  createSelector(
    (state: ApplicationState) => state.account,
    ({list}) => list?.find(({id}) => id === accountId),
  );
