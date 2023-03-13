import {StyleSheet} from 'react-native';

export const styles = (horizontalSpace: number, verticalSpace: number) =>
  StyleSheet.create({
    space: {
      marginVertical: verticalSpace,
      marginHorizontal: horizontalSpace,
    },
  });
