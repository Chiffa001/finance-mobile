import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {getIcon, IconCodes} from '~/components/ui/icons';
import {routes} from '~/routes';

import {styles} from './style';

const Tab = createBottomTabNavigator();

export const MainStackScreen = () => (
  <Tab.Navigator
    screenOptions={{headerShown: false, tabBarLabelStyle: styles.item}}>
    <Tab.Screen
      {...routes.main}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => getIcon(IconCodes.HOME, color, 18),
      }}
    />
    <Tab.Screen
      {...routes.statistics}
      options={{
        tabBarLabel: 'Statistics',
        tabBarIcon: ({color}) => getIcon(IconCodes.STATISTICS, color, 18),
      }}
    />
  </Tab.Navigator>
);
