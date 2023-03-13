import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';

import {styles} from './style';

type Props = {
  verticalSpace?: number;
  horizontalSpace?: number;
};

export const Space: FC<PropsWithChildren<Props>> = ({
  children,
  horizontalSpace,
  verticalSpace,
}) => {
  return (
    <View style={styles(horizontalSpace ?? 0, verticalSpace ?? 0).space}>
      {children}
    </View>
  );
};
