import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AccountList} from '~/components/account/account-list';
import {AddingAccountButton} from '~/components/adding-account-button';
import {ParamNames, RootStackParamList} from '~/types/navigation';

import {styles} from './style';

export const MainScreen: FC<
  NativeStackScreenProps<RootStackParamList, ParamNames.MAIN>
> = ({navigation}) => {
  const addAccountPressHandler = () => {
    navigation.navigate(ParamNames.ADDING_ACCOUNT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AccountList />
      <AddingAccountButton onPress={addAccountPressHandler} />
    </SafeAreaView>
  );
};
