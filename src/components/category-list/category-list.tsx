import React, {FC} from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-paper';

import {useGetCategoryListQuery} from '~/services/category-service';
import {TransactionTypes} from '~/types/transaction';

import {styles} from './style';

type Props = {
  categoryType: TransactionTypes;
  categoryId: number | null;
  onPress: (categoryId: number) => void;
};

export const CategoryList: FC<Props> = ({
  categoryType,
  categoryId,
  onPress,
}) => {
  const {data: list} = useGetCategoryListQuery(categoryType);

  const categoryList = list?.map(({id, name}) => (
    <Chip
      key={id}
      mode="outlined"
      style={styles.chip}
      selected={categoryId === id}
      onPress={() => onPress(id)}
      showSelectedOverlay={true}>
      {name}
    </Chip>
  ));

  return <View style={styles.container}>{categoryList}</View>;
};
