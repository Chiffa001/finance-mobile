import React, {FC, useCallback, useState} from 'react';

import {OperationList} from '~/components/operation/operation-list';
import {Account} from '~/types/account';

import {AccountItem} from '../account-item';

type Props = {
  account: Account;
};

export const AccountInfo: FC<Props> = ({account}) => {
  const [showOperations, setShowOperations] = useState(false);

  const accountPressHandler = useCallback(() => {
    setShowOperations(prev => !prev);
  }, []);

  return (
    <>
      <AccountItem {...account} onPress={accountPressHandler} />
      {showOperations && (
        <OperationList
          accountId={account.id}
          currency={account.currency.code}
        />
      )}
    </>
  );
};
