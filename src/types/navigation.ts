import {FC} from 'react';

export enum RouteNames {
  MAIN = 'main',
  MAIN_STACK = 'mainStack',
  STATISTICS = 'statistics',
  AUTHORIZATION = 'authorization',
}

export enum Routes {
  MAIN = 'MAIN_SCREEN',
  MAIN_STACK = 'MAIN_STACK_SCREEN',
  STATISTICS = 'STATISTICS_SCREEN',
  AUTHORIZATION = 'AUTHORIZATION_SCREEN',
}

export type Route = {
  name: Routes;
  component: FC;
};

export type NavigationProps = {
  navigation: {
    navigate: (routeName: Routes) => void;
  };
};
