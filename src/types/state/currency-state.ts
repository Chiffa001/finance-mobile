import {Currency} from '../currency';

import {CommonState} from './common-state';

export type CurrencyState = {
  list: Currency[] | null;
} & CommonState;
