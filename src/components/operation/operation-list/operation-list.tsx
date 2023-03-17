import React, {FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {useOperationList} from '~/hooks/use-operation-list';

import {renderItem} from './render-item';

type Props = {
  accountId: number;
};

export const OperationList: FC<Props> = ({accountId}) => {
  const {list, inProgress} = useOperationList(accountId);

  if (inProgress) {
    return <ActivityIndicator size="large" />;
  }

  if (!list) {
    return null;
  }

  return (
    <FlatList
      data={list}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
    />
  );
};
