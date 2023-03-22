import {FC} from 'react';

export enum RouteNames {
  MAIN = 'main',
  MAIN_STACK = 'mainStack',
  STATISTICS = 'statistics',
  AUTHORIZATION = 'authorization',
  ADDING_ACCOUNT = 'addingAccount',
}

export enum Routes {
  MAIN = 'MAIN_SCREEN',
  MAIN_STACK = 'MAIN_STACK_SCREEN',
  STATISTICS = 'STATISTICS_SCREEN',
  AUTHORIZATION = 'AUTHORIZATION_SCREEN',
  ADDING_ACCOUNT = 'ADDING_ACCOUNT_SCREEN',
}

export type Route = {
  name: Routes;
  component: FC<NavigationProps>;
};

export type NavigationProps = {
  navigation: {
    navigate: (routeName: Routes) => void;
    goBack: () => void;
  };
};
