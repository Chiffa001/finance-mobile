import {Account} from '../account';

import {CommonState} from './common-state';

export type AccountState = {
  list: Account[] | null;
} & CommonState;
