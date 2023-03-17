import React from 'react';

import {Space} from '~/components/ui/space';
import {Operation} from '~/types/operation';

import {OperationItem} from '../operation-item';

export const renderItem = ({
  item: {sum, type, createdAt, account},
}: {
  item: Operation;
}) => (
  <Space verticalSpace={10} horizontalSpace={10}>
    <OperationItem
      sum={sum}
      type={type}
      createdAt={createdAt}
      currency={account.currency}
    />
  </Space>
);
