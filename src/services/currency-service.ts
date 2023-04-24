import {Currency, CurrencyResponse} from '~/types/currency';

import {apiSlice} from '.';

const currencyService = apiSlice
  .enhanceEndpoints({
    addTagTypes: ['currency'],
  })
  .injectEndpoints({
    endpoints: builder => ({
      getCurrencies: builder.query<Currency[], void>({
        query: () => ({
          url: '/currency/getAll',
        }),
        transformResponse: (response: CurrencyResponse) =>
          response.currencyList,
      }),
    }),
  });

export const {useGetCurrenciesQuery, endpoints: currencyEndpoints} =
  currencyService;
