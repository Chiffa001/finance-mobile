import React, {FC} from 'react';
import {FAB} from 'react-native-paper';

import {styles} from './style';

type Props = {
  onPress: () => void;
};

export const AddingAccountButton: FC<Props> = ({onPress}) => (
  <FAB icon="plus" style={styles.btn} onPress={onPress} />
);
