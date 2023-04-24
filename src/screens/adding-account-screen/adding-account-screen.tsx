import React, {FC, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';

import {Picker} from '@react-native-picker/picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {FormField} from '~/components/ui/form-field';
import {Space} from '~/components/ui/space';
import {useCreateAccountMutation} from '~/services/account-service';
import {useGetCurrenciesQuery} from '~/services/currency-service';
import {ParamNames, RootStackParamList} from '~/types/navigation';

import {styles} from './style';

export const AddingAccountScreen: FC<
  NativeStackScreenProps<RootStackParamList, ParamNames.ADDING_ACCOUNT>
> = ({navigation}) => {
  const {data: list, isLoading} = useGetCurrenciesQuery();
  const [addAccount] = useCreateAccountMutation();
  const [selectedCurrency, setSelectedCurrency] = useState<number | null>(
    () => list?.[0].id ?? null,
  );
  const [accountName, setAccountName] = useState('');

  if (isLoading) {
    return (
      <Space verticalSpace={10}>
        <ActivityIndicator animating={true} />
      </Space>
    );
  }

  const addingAccountPressHandler = async () => {
    await addAccount({
      name: accountName,
      currencyId: selectedCurrency ?? (list?.[0].id as number),
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormField>
        <TextInput
          label="Название счёта"
          value={accountName}
          onChangeText={setAccountName}
        />
      </FormField>
      <FormField>
        <Picker
          selectedValue={selectedCurrency}
          onValueChange={setSelectedCurrency}>
          {list?.map(({id, code}) => (
            <Picker.Item label={code} value={id} key={id} />
          ))}
        </Picker>
      </FormField>
      <Space horizontalSpace={10} verticalSpace={10}>
        <Button title="Добавить" onPress={addingAccountPressHandler} />
      </Space>
    </SafeAreaView>
  );
};
