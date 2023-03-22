import React, {FC, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';

import {Picker} from '@react-native-picker/picker';

import {FormField} from '~/components/ui/form-field';
import {Space} from '~/components/ui/space';
import {useAccountList} from '~/hooks/use-account-list';
import {useCurrencyList} from '~/hooks/use-currency-list';
import {NavigationProps} from '~/types/navigation';

import {styles} from './style';

export const AddingAccountScreen: FC<NavigationProps> = ({navigation}) => {
  const {list, inProgress} = useCurrencyList();
  const {addAccount, updateAccountList} = useAccountList();
  const [selectedCurrency, setSelectedCurrency] = useState<number | null>(
    () => list?.[0].id ?? null,
  );
  const [accountName, setAccountName] = useState('');

  if (inProgress) {
    return (
      <Space verticalSpace={10}>
        <ActivityIndicator animating={true} />
      </Space>
    );
  }

  const addingAccountPressHandler = () => {
    addAccount(
      {
        name: accountName,
        currencyId: selectedCurrency ?? (list?.[0].id as number),
      },
      () => {
        updateAccountList();
      },
    );
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
          onValueChange={v => setSelectedCurrency(v)}>
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
