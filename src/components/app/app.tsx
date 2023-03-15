import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {Screens} from '~/screens';
import {store} from '~/store';

export const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  </Provider>
);
