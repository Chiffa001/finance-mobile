import {createSelector} from '@reduxjs/toolkit';

import {accountEndpoints} from '~/services/account-service';
import {categoryEndpoints} from '~/services/category-service';
import {operationEndpoints} from '~/services/operation-service';
import {TransactionTypes} from '~/types/transaction';

const accountList = accountEndpoints.getAccounts.select();

export const selectOperationData = (accountId: number) =>
  operationEndpoints.getOperationInfo.select(accountId);

export const selectAccount = (accountId: number) =>
  createSelector(accountList, ({data}) =>
    data?.find(({id}) => id === accountId),
  );

export const selectCategories = (type: TransactionTypes) =>
  categoryEndpoints.getCategoryList.select(type);
