import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  createNewOperation,
  getOperationInfo as getOperationInfoService,
} from '~/services/operation';
import {OperationActions} from '~/types/actions/operation-actions';
import {
  CreateOperationResponse,
  FullOperationData,
  OperationInfoResponse,
} from '~/types/operation';
import {getToken} from '~/utils/token';

export const getOperationInfo = createAsyncThunk<
  OperationInfoResponse['info'],
  number
>(OperationActions.GET_INFO, async accountId => {
  const token = await getToken();

  return getOperationInfoService(accountId, token);
});

export const addOperation = createAsyncThunk<
  CreateOperationResponse,
  FullOperationData
>(OperationActions.ADD, async data => {
  const token = await getToken();

  return createNewOperation(data, token);
});
