import axios from 'axios';

import {createAsyncThunk} from '@reduxjs/toolkit';

import {OperationActions} from '~/types/actions/operation-actions';
import {OperationInfoResponse} from '~/types/operation';
import {getToken} from '~/utils/token';
import {BASE_API_URL} from '~env';

export const getOperationInfo = createAsyncThunk<
  OperationInfoResponse['info'],
  number
>(OperationActions.GET_INFO, async accountId => {
  const token = await getToken();

  const {data} = await axios.get<OperationInfoResponse>(
    `${BASE_API_URL}/operation/get-operations-list`,
    {
      headers: {
        Authorization: token,
      },
      params: {
        accountId,
      },
    },
  );

  return data.info;
});
