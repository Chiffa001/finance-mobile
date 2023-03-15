import {AuthScreen} from '~/screens/auth-screen';
import {MainScreen} from '~/screens/main-screen';
import {MainStackScreen} from '~/screens/main-stack-screen/main-stack-screen';
import {StatisticsScreen} from '~/screens/statistics-screen';
import {Route, RouteNames, Routes} from '~/types/navigation';

export const routes: Record<RouteNames, Route> = {
  [RouteNames.MAIN]: {
    name: Routes.MAIN,
    component: MainScreen,
  },
  [RouteNames.MAIN_STACK]: {
    name: Routes.MAIN_STACK,
    component: MainStackScreen,
  },
  [RouteNames.AUTHORIZATION]: {
    name: Routes.AUTHORIZATION,
    component: AuthScreen,
  },
  [RouteNames.STATISTICS]: {
    name: Routes.STATISTICS,
    component: StatisticsScreen,
  },
};
