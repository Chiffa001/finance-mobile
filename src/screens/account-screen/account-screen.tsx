import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Card, Text} from 'react-native-paper';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {OperationList} from '~/components/operation/operation-list';
import {useAppSelector} from '~/hooks/use-app-selector';
import {selectAccount} from '~/store/selectors';
import {Account} from '~/types/account';
import {BottomParamNames, BottomStackParamList} from '~/types/navigation';

import {styles} from './style';

export const AccountScreen: FC<
  BottomTabScreenProps<BottomStackParamList, BottomParamNames.ACCOUNT>
> = ({
  route: {
    params: {accountId, currency},
  },
}) => {
  const {name, balance} = useAppSelector(selectAccount(accountId)) as Account;

  return (
    <SafeAreaView style={styles.container}>
      <Card mode="contained" style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{name}</Text>
          <Text variant="titleLarge">
            {balance} {currency}
          </Text>
        </Card.Content>
      </Card>
      <OperationList accountId={accountId} currency={currency} />
    </SafeAreaView>
  );
};
