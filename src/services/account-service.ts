import {Account, AccountData, AccountResponse} from '~/types/account';

import {apiSlice} from '.';

const accountService = apiSlice
  .enhanceEndpoints({
    addTagTypes: ['account'],
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAccounts: builder.query<Account[], void>({
        query: () => ({
          url: '/account/getAllAccounts',
        }),
        transformResponse: (response: AccountResponse) => response.accountList,
        providesTags: ['account'],
      }),
      createAccount: builder.mutation<Account, AccountData>({
        query: data => ({
          url: '/account/createAccount',
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['account'],
      }),
    }),
  });

export const {
  useGetAccountsQuery,
  useCreateAccountMutation,
  endpoints: accountEndpoints,
} = accountService;
