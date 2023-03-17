import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';

import {Operation} from '~/types/operation';
import {getDateTime} from '~/utils/date';

import {styles} from './style';

type Props = Omit<Operation, 'id' | 'balance' | 'account'> & {
  currency: Operation['account']['currency'];
};

export const OperationItem: FC<Props> = ({
  sum,
  createdAt,
  type,
  currency: {code},
}) => {
  const {date, time} = useMemo(() => getDateTime(createdAt), [createdAt]);

  return (
    <View style={styles.item}>
      <Text>
        {sum} {code}
      </Text>
      <Text>{type}</Text>
      <Text>
        {date} {time}
      </Text>
    </View>
  );
};
