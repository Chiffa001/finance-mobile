import {AuthScreen} from '~/screens/auth-screen';
import {MainScreen} from '~/screens/main-screen';

export enum Routes {
  MAIN = 'MAIN_PAGE',
  REGISTRATION = 'REGISTRATION_PAGE',
}

export const routes = {
  main: {
    name: Routes.MAIN,
    component: MainScreen,
  },
  registration: {
    name: Routes.REGISTRATION,
    component: AuthScreen,
  },
};
