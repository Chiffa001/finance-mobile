import React, {FC, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

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
          label="Email"
          mode="outlined"
          activeOutlineColor="#4287f5"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </FormField>
      <FormField>
        <TextInput
          label="Password"
          mode="outlined"
          activeOutlineColor="#4287f5"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </FormField>
      <Space horizontalSpace={10} verticalSpace={10}>
        <Button title="Войти" onPress={logInPressHandler} />
      </Space>
    </SafeAreaView>
  );
};
