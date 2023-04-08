import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ActivityIndicator, Card, Text} from 'react-native-paper';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {AddingButton} from '~/components/adding-button';
import {AddingOperationModal} from '~/components/adding-operation-modal';
import {OperationList} from '~/components/operation/operation-list';
import {useAccountList} from '~/hooks/use-account-list';
import {useAppSelector} from '~/hooks/use-app-selector';
import {useOperationList} from '~/hooks/use-operation-list';
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
  const {name, balance} = useAppSelector(selectAccount(accountId)) as Account;
  const {addNewOperation, updateOperationList} = useOperationList(accountId);
  const {updateAccountList, inProgress} = useAccountList();

  const toggleModalHandler = () => {
    setShowModal(prev => !prev);
  };

  const operationSaveHandler = async (data: OperationData) => {
    await addNewOperation(data);
    setShowModal(false);
    updateOperationList();
    updateAccountList();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card mode="contained" style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{name}</Text>
          {inProgress ? (
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
