import React, {FC} from 'react';
import {Card, Text} from 'react-native-paper';

import {Account} from '~/types/account';

import {styles} from './styles';

type Props = {
  onPress: () => void;
} & Account;

export const AccountItem: FC<Props> = ({
  name,
  currency: {code},
  balance,
  onPress,
}) => (
  <Card onPress={onPress}>
    <Card.Content>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.balance}>
        {balance} {code}
      </Text>
    </Card.Content>
  </Card>
);
