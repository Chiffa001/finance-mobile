import axios from 'axios';

import {CurrencyResponse} from '~/types/currency';
import {BASE_API_URL} from '~env';

export const getCurrencyList = async (token: string) => {
  const {data} = await axios.get<CurrencyResponse>(
    `${BASE_API_URL}/currency/getAll`,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return data.currencyList;
};
