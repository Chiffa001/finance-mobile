import {getToken} from './token';

export const prepareHeaders = async (headers: Headers) => {
  const token = await getToken();

  if (token) {
    headers.set('authorization', token);
  }

  return headers;
};
