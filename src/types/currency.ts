import {User} from './user';

export type Currency = {
  id: number;
  code: string;
};

export type CurrencyResponse = {
  user: User;
  currencyList: Currency[];
};
