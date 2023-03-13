import React, {FC, useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';

import {FormField} from '~/components/ui/form-field';
import {Space} from '~/components/ui/space';
import {useAppDispatch} from '~/hooks/use-app-dispatch';
import {useAppSelector} from '~/hooks/use-app-selector';
import {Routes} from '~/routes';
import {logIn} from '~/store/actions/auth-actions';
import {NavigationProps} from '~/types/navigation';

import {styles} from './styles';

export const AuthScreen: FC<NavigationProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {isAuth} = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuth) {
      return;
    }

    navigation.navigate(Routes.MAIN);
  }, [isAuth, navigation]);

  const logInPressHandler = () => {
    dispatch(
      logIn({
        email,
        password,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.formContainer}>
      <Text style={styles.title}>Авторизация</Text>
      <FormField>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="email"
        />
      </FormField>
      <FormField>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        />
      </FormField>
      <Space horizontalSpace={10} verticalSpace={10}>
        <Button title="Войти" onPress={logInPressHandler} />
      </Space>
    </SafeAreaView>
  );
};
