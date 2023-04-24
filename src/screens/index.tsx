import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from '~/hooks/use-app-selector';
import {ParamNames, RootStackParamList} from '~/types/navigation';

import {AddingAccountScreen} from './adding-account-screen';
import {AuthScreen} from './auth-screen';
import {MainScreen} from './main-screen';
import {MainStackScreen} from './main-stack-screen';

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

export const Screens = () => {
  const {isAuth} = useAppSelector(state => state.authStatus);

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <>
          <Screen component={MainScreen} name={ParamNames.MAIN} />
          <Screen
            component={MainStackScreen}
            name={ParamNames.MAIN_STACK}
            options={{headerShown: true, headerTitle: 'Детальная информация'}}
          />
          <Screen
            component={AddingAccountScreen}
            name={ParamNames.ADDING_ACCOUNT}
            options={{headerShown: true, title: 'Добавить счёт'}}
          />
        </>
      ) : (
        <Screen component={AuthScreen} name={ParamNames.AUTHORIZATION} />
      )}
    </Navigator>
  );
};
