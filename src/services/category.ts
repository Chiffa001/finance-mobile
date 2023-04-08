import axios from 'axios';

import {CategoriesResponse} from '~/types/category';
import {TransactionTypes} from '~/types/transaction';
import {BASE_API_URL} from '~env';

export const getCategoryList = async (
  token: string,
  type: TransactionTypes,
) => {
  const {data} = await axios.get<CategoriesResponse>(
    `${BASE_API_URL}/category/getAll`,
    {
      headers: {
        Authorization: token,
      },
      params: {
        type,
      },
    },
  );

  return data.categories;
};
