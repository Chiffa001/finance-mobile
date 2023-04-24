import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {DataTable} from 'react-native-paper';

import {useGetOperationInfoQuery} from '~/services/operation-service';

import {OperationItem} from '../operation-item';

import {styles} from './style';

type Props = {
  accountId: number;
  currency: string;
};

export const OperationList: FC<Props> = ({accountId, currency}) => {
  const {currentData, isFetching} = useGetOperationInfoQuery(accountId);

  if (isFetching) {
    return <ActivityIndicator size="large" />;
  }

  if (!currentData) {
    return null;
  }

  const mappedList = currentData.operations.map(
    ({sum, type, createdAt, id}) => (
      <OperationItem key={id} sum={sum} type={type} createdAt={createdAt} />
    ),
  );

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title textStyle={styles.tableTitle}>
          Sum ({currency})
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle}>Type</DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle}>
          DateTime
        </DataTable.Title>
      </DataTable.Header>
      {mappedList}
    </DataTable>
  );
};
