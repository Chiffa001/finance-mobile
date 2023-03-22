import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  createAccount as createAccountService,
  getAccountList,
} from '~/services/account';
import {Account, AccountData} from '~/types/account';
import {AccountActions} from '~/types/actions/account-actions';
import {getToken} from '~/utils/token';

export const getAllAccounts = createAsyncThunk<Account[]>(
  AccountActions.GET_ALL,
  async () => {
    const token = await getToken();

    return getAccountList(token);
  },
);

export const createAccount = createAsyncThunk<
  void,
  {data: AccountData; cb?: () => void}
>(AccountActions.ADD, async ({data, cb}) => {
  const token = await getToken();

  await createAccountService(data, token);

  cb?.();
});
