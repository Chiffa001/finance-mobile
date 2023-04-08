import {TransactionTypes} from './transaction';
import {User} from './user';

export type Category = {
  id: number;
  name: string;
  type: TransactionTypes;
};

export type CategoriesResponse = {
  user: User;
  categories: Category[];
};
