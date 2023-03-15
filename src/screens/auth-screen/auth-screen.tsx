import React, {FC, useState} from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';

import {FormField} from '~/components/ui/form-field';
import {Space} from '~/components/ui/space';
import {useAppDispatch} from '~/hooks/use-app-dispatch';
import {logIn} from '~/store/actions/auth-actions';

import {styles} from './styles';

export const AuthScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

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
