import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

import {AccountList} from '~/components/account/account-list';
import {AddingAccountButton} from '~/components/adding-account-button';
import {NavigationProps, Routes} from '~/types/navigation';

import {styles} from './style';

export const MainScreen: FC<NavigationProps> = ({navigation}) => {
  const addAccountPressHandler = () => {
    navigation.navigate(Routes.ADDING_ACCOUNT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AccountList />
      <AddingAccountButton onPress={addAccountPressHandler} />
    </SafeAreaView>
  );
};
