import {createAsyncThunk} from '@reduxjs/toolkit';

import {getCategoryList} from '~/services/category';
import {CategoryActions} from '~/types/actions/category-actions';
import {Category} from '~/types/category';
import {TransactionTypes} from '~/types/transaction';
import {getToken} from '~/utils/token';

export const getAllCategories = createAsyncThunk<Category[], TransactionTypes>(
  CategoryActions.GET_ALL,
  async type => {
    const token = await getToken();

    return getCategoryList(token, type);
  },
);
