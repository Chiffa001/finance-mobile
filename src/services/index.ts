import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {prepareHeaders} from '~/utils/headers';
import {BASE_API_URL} from '~env';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders,
  }),
  endpoints: () => ({}),
});

export const {reducer, reducerPath, middleware} = apiSlice;
