import React from 'react';

import {Account} from '~/types/account';

import {Space} from '../../ui/space';
import {AccountInfo} from '../account-info';

export const renderItem = ({item}: {item: Account}) => (
  <Space verticalSpace={10} horizontalSpace={10}>
    <AccountInfo account={item} />
  </Space>
);
