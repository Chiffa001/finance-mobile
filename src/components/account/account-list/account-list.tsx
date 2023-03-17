import React from 'react';
import {FlatList} from 'react-native';

import {useAccountList} from '~/hooks/use-account-list';

import {renderItem} from './render-item';

// import {styles} from './styles';

export const AccountList = () => {
  const {list} = useAccountList();

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
