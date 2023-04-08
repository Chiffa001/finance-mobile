import axios from 'axios';

import {
  CreateOperationResponse,
  FullOperationData,
  OperationInfoResponse,
} from '~/types/operation';
import {BASE_API_URL} from '~env';

export const getOperationInfo = async (accountId: number, token: string) => {
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
};

export const createNewOperation = async (
  data: FullOperationData,
  token: string,
) => {
  const response = await axios.post<CreateOperationResponse>(
    `${BASE_API_URL}/operation/add`,
    data,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return response.data;
};
