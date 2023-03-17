import {createSelector} from '@reduxjs/toolkit';

import {ApplicationState} from './store';

export const selectOperationData = (accountId: number) =>
  createSelector(
    (state: ApplicationState) => state.operation,
    state => state[accountId] ?? {},
  );
