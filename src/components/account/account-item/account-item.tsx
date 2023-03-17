import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

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
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.balance}>
      {balance} {code}
    </Text>
  </TouchableOpacity>
);
