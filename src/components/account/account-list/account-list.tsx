import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {Space} from '~/components/ui/space';
import {useAccountList} from '~/hooks/use-account-list';

import {renderItem} from './render-item';

export const AccountList = () => {
  const {list, inProgress} = useAccountList();

  if (inProgress) {
    return (
      <Space verticalSpace={10}>
        <ActivityIndicator animating={true} />
      </Space>
    );
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
