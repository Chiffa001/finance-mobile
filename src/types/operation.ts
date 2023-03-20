import {Account} from './account';

export type OperationType = 'INCOME' | 'EXPENSE';

export type Operation = {
  id: number;
  balance: number;
  sum: number;
  createdAt: string;
  type: OperationType;
  account: Pick<Account, 'id' | 'currency'>;
};

export type OperationInfoResponse = {
  info: {
    total: number;
    operations: Operation[];
  };
};
