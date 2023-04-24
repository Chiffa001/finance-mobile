import {CategoriesResponse, Category} from '~/types/category';
import {TransactionTypes} from '~/types/transaction';

import {apiSlice} from '.';

const categoryService = apiSlice
  .enhanceEndpoints({
    addTagTypes: ['category'],
  })
  .injectEndpoints({
    endpoints: builder => ({
      getCategoryList: builder.query<Category[], TransactionTypes>({
        query: type => ({
          url: '/category/getAll',
          params: {
            type,
          },
        }),
        transformResponse: (response: CategoriesResponse) =>
          response.categories,
      }),
    }),
  });

export const {useGetCategoryListQuery, endpoints: categoryEndpoints} =
  categoryService;
