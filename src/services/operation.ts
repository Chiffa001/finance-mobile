import axios from 'axios';

import {OperationInfoResponse} from '~/types/operation';
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
