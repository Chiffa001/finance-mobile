import React from 'react';
import {SafeAreaView} from 'react-native';

import {AccountList} from '~/components/account/account-list';

export const MainScreen = () => (
  <SafeAreaView>
    <AccountList />
  </SafeAreaView>
);
