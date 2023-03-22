import {createAsyncThunk} from '@reduxjs/toolkit';

import {getCurrencyList as getCurrencyListService} from '~/services/currency';
import {CurrencyActions} from '~/types/actions/currency-actions';
import {getToken} from '~/utils/token';

export const getCurrencyList = createAsyncThunk(
  CurrencyActions.GET_ALL,
  async () => {
    const token = await getToken();

    return getCurrencyListService(token);
  },
);
