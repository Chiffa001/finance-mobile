import React, {FC, useCallback} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';

import {Account} from '~/types/account';
import {ParamNames, RootStackParamList} from '~/types/navigation';

import {AccountItem} from '../account-item';

type Props = {
  account: Account;
};

export const AccountInfo: FC<Props> = ({account}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const accountPressHandler = useCallback(() => {
    navigation.navigate(ParamNames.MAIN_STACK, {
      accountId: account.id,
      currency: account.currency.code,
    });
  }, [account.currency.code, account.id, navigation]);

  return <AccountItem {...account} onPress={accountPressHandler} />;
};
