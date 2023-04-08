import React, {FC, useMemo} from 'react';
import {DataTable} from 'react-native-paper';

import {Operation} from '~/types/operation';
import {TransactionTypes} from '~/types/transaction';
import {getDateTime} from '~/utils/date';

import {styles} from './style';

type Props = Omit<Operation, 'id' | 'balance' | 'account'>;

export const OperationItem: FC<Props> = ({sum, createdAt, type}) => {
  const {date, time} = useMemo(() => getDateTime(createdAt), [createdAt]);

  const operationStyle = useMemo(
    () =>
      type === TransactionTypes.INCOME ? styles.positive : styles.negative,
    [type],
  );

  return (
    <DataTable.Row>
      <DataTable.Cell textStyle={styles.sum}>{sum}</DataTable.Cell>
      <DataTable.Cell textStyle={operationStyle}>{type}</DataTable.Cell>
      <DataTable.Cell>
        {time} {date}
      </DataTable.Cell>
    </DataTable.Row>
  );
};
