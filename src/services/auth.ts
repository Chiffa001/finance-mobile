import axios from 'axios';

import {AuthData, AuthResponse} from '~/types/auth';
import {BASE_API_URL} from '~env';

export const logIn = async ({email, password}: AuthData) => {
  const {data} = await axios.post<AuthResponse>(`${BASE_API_URL}/users/login`, {
    email,
    password,
  });

  return data.token;
};
