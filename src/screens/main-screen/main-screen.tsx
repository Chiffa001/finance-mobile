import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {AccountList} from '~/components/account/account-list';

export const MainScreen = () => (
  <SafeAreaView>
    <Text>Finance Mobile</Text>
    <AccountList />
  </SafeAreaView>
);
