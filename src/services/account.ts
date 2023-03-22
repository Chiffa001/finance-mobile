import axios from 'axios';

import {AccountData, AccountResponse} from '~/types/account';
import {BASE_API_URL} from '~env';

export const getAccountList = async (token: string) => {
  const {data} = await axios.get<AccountResponse>(
    `${BASE_API_URL}/account/getAllAccounts`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return data.accountList;
};

export const createAccount = async (data: AccountData, token: string) => {
  return axios.post(`${BASE_API_URL}/account/createAccount`, data, {
    headers: {
      Authorization: token,
    },
  });
};
