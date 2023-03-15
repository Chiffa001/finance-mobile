import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from '~/hooks/use-app-selector';
import {routes} from '~/routes';

const {Screen, Navigator} = createNativeStackNavigator();

export const Screens = () => {
  const {isAuth} = useAppSelector(state => state.auth);

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Screen {...routes.mainStack} />
      ) : (
        <Screen {...routes.authorization} />
      )}
    </Navigator>
  );
};
