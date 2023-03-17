import axios from 'axios';

import {createAsyncThunk} from '@reduxjs/toolkit';

import {Account, AccountResponse} from '~/types/account';
import {AccountActions} from '~/types/actions/account-actions';
import {getToken} from '~/utils/token';
import {BASE_API_URL} from '~env';

export const getAllAccounts = createAsyncThunk<Account[]>(
  AccountActions.GET_ALL,
  async () => {
    const token = await getToken();

    const {data} = await axios.get<AccountResponse>(
      `${BASE_API_URL}/account/getAllAccounts`,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    return data.accountList;
  },
);
