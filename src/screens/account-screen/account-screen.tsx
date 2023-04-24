import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ActivityIndicator, Card, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {AddingButton} from '~/components/adding-button';
import {AddingOperationModal} from '~/components/adding-operation-modal';
import {OperationList} from '~/components/operation/operation-list';
import {useGetAccountsQuery} from '~/services/account-service';
import {useAddOperationMutation} from '~/services/operation-service';
import {selectAccount} from '~/store/selectors';
import {Account} from '~/types/account';
import {BottomParamNames, BottomStackParamList} from '~/types/navigation';
import {OperationData} from '~/types/operation';

import {styles} from './style';

export const AccountScreen: FC<
  BottomTabScreenProps<BottomStackParamList, BottomParamNames.ACCOUNT>
> = ({
  route: {
    params: {accountId, currency},
  },
}) => {
  const [showModal, setShowModal] = useState(false);
  const {name, balance} = useSelector(selectAccount(accountId)) as Account;
  const [addOperation] = useAddOperationMutation();
  const {isFetching, refetch: refetchAccounts} = useGetAccountsQuery();

  const toggleModalHandler = () => {
    setShowModal(prev => !prev);
  };

  const operationSaveHandler = async (data: OperationData) => {
    await addOperation({
      accountId,
      ...data,
    });
    setShowModal(false);
    refetchAccounts();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card mode="contained" style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{name}</Text>
          {isFetching ? (
            <ActivityIndicator animating={true} />
          ) : (
            <Text variant="titleLarge">
              {balance} {currency}
            </Text>
          )}
        </Card.Content>
      </Card>
      <OperationList accountId={accountId} currency={currency} />
      {showModal && (
        <AddingOperationModal
          onDismiss={toggleModalHandler}
          onSave={operationSaveHandler}
        />
      )}
      <AddingButton onPress={toggleModalHandler} />
    </SafeAreaView>
  );
};
