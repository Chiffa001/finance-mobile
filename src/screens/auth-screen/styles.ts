import {StyleSheet} from 'react-native';

const borderRadius = 6;

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderColor: 'rgba(32, 31, 30, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: 'Lato-Regular',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
});
