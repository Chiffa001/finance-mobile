import AsyncStorage from '@react-native-async-storage/async-storage';

import {setAuth} from '~/store/reducers/auth-status-slice';
import {AuthData, AuthResponse} from '~/types/auth';

import {apiSlice} from '.';

const authService = apiSlice
  .enhanceEndpoints({
    addTagTypes: ['auth'],
  })
  .injectEndpoints({
    endpoints: builder => ({
      logIn: builder.mutation<string, AuthData>({
        query: data => ({
          url: '/users/login',
          method: 'POST',
          body: data,
        }),
        onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
          const {data} = await queryFulfilled;
          await AsyncStorage.setItem('token', data);
          dispatch(setAuth(Boolean(data)));
        },
        invalidatesTags: ['auth'],
        transformResponse: (response: AuthResponse) => response.token,
      }),
    }),
  });

export const {useLogInMutation, endpoints: authEndpoints} = authService;
