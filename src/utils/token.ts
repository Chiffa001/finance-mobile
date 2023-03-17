import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    throw new Error('Token is empty');
  }

  return `Bearer ${token}`;
};
