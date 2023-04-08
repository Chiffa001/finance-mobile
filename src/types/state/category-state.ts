import {Category} from '../category';
import {TransactionTypes} from '../transaction';

import {CommonState} from './common-state';

export type CategoryState = Record<
  TransactionTypes,
  {
    list: Category[] | null;
  } & CommonState
>;
