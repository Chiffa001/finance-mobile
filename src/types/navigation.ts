import {Override} from './utils';

export enum ParamNames {
  MAIN_STACK = 'mainStack',
  AUTHORIZATION = 'authorization',
  ADDING_ACCOUNT = 'addingAccount',
  MAIN = 'main',
}

export enum BottomParamNames {
  STATISTICS = 'statistics',
  ACCOUNT = 'account',
}

type AccountData = {
  accountId: number;
  currency: string;
};

export type BottomStackParamList = Override<
  Record<BottomParamNames, undefined>,
  {
    [BottomParamNames.ACCOUNT]: AccountData;
  }
>;

export type RootStackParamList = Override<
  Record<ParamNames, undefined>,
  {
    [ParamNames.MAIN_STACK]: AccountData;
  }
>;
