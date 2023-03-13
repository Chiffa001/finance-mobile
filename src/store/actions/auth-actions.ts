import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {AuthActions} from '~/types/actions/auth-actions';
import {AuthResponse} from '~/types/auth';
import {BASE_API_URL} from '~env';

export const logIn = createAsyncThunk<void, {email: string; password: string}>(
  AuthActions.AUTH,
  async ({email, password}) => {
    const {data} = await axios.post<AuthResponse>(
      `${BASE_API_URL}/users/login`,
      {
        email,
        password,
      },
    );
    await AsyncStorage.setItem('token', data.token);
  },
);
