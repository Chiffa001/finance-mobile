import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {Screens} from '~/screens';
import {store} from '~/store';

import 'react-native-gesture-handler';

export const App = () => (
  <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </PaperProvider>
  </Provider>
);
