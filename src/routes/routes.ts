import {FC} from 'react';

import {MainScreen} from '~/screens/main-screen';

type Route = {
  name: Routes;
  component: FC;
};

export enum Routes {
  MAIN = 'MAIN_PAGE',
}

export const routes: Record<string, Route> = {
  main: {
    name: Routes.MAIN,
    component: MainScreen,
  },
};
