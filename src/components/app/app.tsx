import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes, routes} from '~/routes';
import {store} from '~/store';

const {Screen, Navigator} = createNativeStackNavigator();

export const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.REGISTRATION}
        screenOptions={{headerShown: false}}>
        <Screen {...routes.main} />
        <Screen {...routes.registration} />
      </Navigator>
    </NavigationContainer>
  </Provider>
);
