import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {logIn as getAuthToken} from '~/services/auth';
import {AuthActions} from '~/types/actions/auth-actions';
import {AuthData} from '~/types/auth';

export const logIn = createAsyncThunk<void, AuthData>(
  AuthActions.AUTH,
  async data => {
    const token = await getAuthToken(data);
    await AsyncStorage.setItem('token', token);
  },
);
