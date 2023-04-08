import {Account} from './account';
import {TransactionTypes} from './transaction';
import {User} from './user';

export type Operation = {
  id: number;
  balance: number;
  sum: number;
  createdAt: string;
  type: TransactionTypes;
  account: Pick<Account, 'id' | 'currency'>;
};

export type OperationInfoResponse = {
  info: {
    total: number;
    operations: Operation[];
  };
};

export type OperationData = {
  sum: number;
  categoryId: number;
  operationType: TransactionTypes;
};

export type FullOperationData = {
  accountId: number;
} & OperationData;

export type CreateOperationResponse = {
  user: User;
  operation: Operation;
};
