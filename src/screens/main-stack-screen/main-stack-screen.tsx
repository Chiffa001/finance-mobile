import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {getIcon, IconCodes} from '~/components/ui/icons';
import {
  BottomParamNames,
  BottomStackParamList,
  ParamNames,
  RootStackParamList,
} from '~/types/navigation';

import {AccountScreen} from '../account-screen';
import {StatisticsScreen} from '../statistics-screen';

import {styles} from './style';

const Tab = createBottomTabNavigator<BottomStackParamList>();

export const MainStackScreen: FC<
  NativeStackScreenProps<RootStackParamList, ParamNames.MAIN_STACK>
> = ({route: {params}}) => (
  <Tab.Navigator
    screenOptions={{headerShown: false, tabBarLabelStyle: styles.item}}>
    <Tab.Screen
      component={AccountScreen}
      name={BottomParamNames.ACCOUNT}
      options={{
        tabBarLabel: 'Info',
        tabBarIcon: ({color}) => getIcon(IconCodes.HOME, color, 18),
      }}
      initialParams={params}
    />
    <Tab.Screen
      component={StatisticsScreen}
      name={BottomParamNames.STATISTICS}
      options={{
        tabBarLabel: 'Statistics',
        tabBarIcon: ({color}) => getIcon(IconCodes.STATISTICS, color, 18),
      }}
    />
  </Tab.Navigator>
);
