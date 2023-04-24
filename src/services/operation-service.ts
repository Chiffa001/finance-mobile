import {
  FullOperationData,
  Operation,
  OperationInfoResponse,
} from '~/types/operation';

import {apiSlice} from '.';

const operationService = apiSlice
  .enhanceEndpoints({
    addTagTypes: ['operation'],
  })
  .injectEndpoints({
    endpoints: builder => ({
      getOperationInfo: builder.query<
        {
          total: number;
          operations: Operation[];
        },
        number
      >({
        query: accountId => ({
          url: '/operation/get-operations-list',
          params: {
            accountId,
          },
        }),
        transformResponse: (response: OperationInfoResponse) => response.info,
        providesTags: ['operation'],
      }),
      addOperation: builder.mutation<Operation, FullOperationData>({
        query: data => ({
          url: '/operation/add',
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['operation'],
      }),
    }),
  });

export const {
  useGetOperationInfoQuery,
  useAddOperationMutation,
  endpoints: operationEndpoints,
} = operationService;
