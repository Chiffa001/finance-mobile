import React, {FC, PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

type Props = {
  label?: string;
};

export const FormField: FC<PropsWithChildren<Props>> = ({children, label}) => (
  <View style={styles.field}>
    {label && <Text style={styles.label}>{label}</Text>}
    {children}
  </View>
);
