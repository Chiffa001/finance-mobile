import React, {FC, useState} from 'react';
import {Button} from 'react-native';
import {Card, Modal, Portal, TextInput} from 'react-native-paper';

import {Picker} from '@react-native-picker/picker';

import {CategoryList} from '~/components/category-list';
import {FormField} from '~/components/ui/form-field';
import {OperationData} from '~/types/operation';
import {TransactionTypes} from '~/types/transaction';

import {Space} from '../ui/space';

import {styles} from './style';

type Props = {
  onDismiss: () => void;
  onSave: (data: OperationData) => Promise<void>;
};

const categoryNames = {
  [TransactionTypes.INCOME]: 'Доход',
  [TransactionTypes.EXPENSE]: 'Расход',
};

export const AddingOperationModal: FC<Props> = ({onDismiss, onSave}) => {
  const [sum, setSum] = useState('');
  const [selectedCategoryType, setSelectedCategoryType] =
    useState<TransactionTypes>(TransactionTypes.EXPENSE);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  const sumChangeHandler = (value: string) => {
    if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      setSum(value);
    }
  };

  const categoryTypeChangeHandler = (categoryType: TransactionTypes) => {
    setSelectedCategoryType(categoryType);
    setSelectedCategoryId(null);
  };

  return (
    <Portal>
      <Modal visible={true} onDismiss={onDismiss} style={styles.container}>
        <Card mode="contained">
          <Card.Title title="Добавить операцию" titleStyle={styles.title} />
          <Card.Content>
            <FormField>
              <TextInput
                label="Сумма"
                value={sum}
                onChangeText={sumChangeHandler}
                keyboardType="numeric"
              />
            </FormField>
            <FormField>
              <Picker
                selectedValue={selectedCategoryType}
                onValueChange={categoryTypeChangeHandler}>
                {Object.entries(categoryNames).map(([key, value]) => (
                  <Picker.Item label={value} value={key} key={key} />
                ))}
              </Picker>
            </FormField>
            <FormField>
              <CategoryList
                categoryType={selectedCategoryType}
                categoryId={selectedCategoryId}
                onPress={setSelectedCategoryId}
              />
            </FormField>
            <Space horizontalSpace={10} verticalSpace={10}>
              <Button
                title="Добавить"
                onPress={() =>
                  onSave({
                    sum: +sum,
                    categoryId: selectedCategoryId as number,
                    operationType: selectedCategoryType,
                  })
                }
                disabled={!sum || !selectedCategoryId}
              />
            </Space>
          </Card.Content>
        </Card>
      </Modal>
    </Portal>
  );
};
