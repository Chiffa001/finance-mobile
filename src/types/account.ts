import {Currency} from './currency';
import {User} from './user';

export type Account = {
  id: number;
  name: string;
  currency: Currency;
  balance: number;
};

export type AccountResponse = {
  accountList: Account[];
  user: User;
};
