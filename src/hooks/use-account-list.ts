import {useCallback, useEffect} from 'react';

import {createAccount, getAllAccounts} from '~/store/actions/account-actions';
import {AccountData} from '~/types/account';

import {useAppDispatch} from './use-app-dispatch';
import {useAppSelector} from './use-app-selector';

export const useAccountList = () => {
  const {list, inProgress, failed, isDone} = useAppSelector(
    state => state.account,
  );
  const dispatch = useAppDispatch();

  const updateAccountList = useCallback(() => {
    dispatch(getAllAccounts());
  }, [dispatch]);

  const addAccount = useCallback(
    (data: AccountData, cb?: () => void) => {
      dispatch(createAccount({data, cb}));
    },
    [dispatch],
  );

  useEffect(() => {
    if (failed || inProgress || isDone) {
      return;
    }

    updateAccountList();
  }, [failed, inProgress, isDone, updateAccountList]);

  return {list, inProgress, failed, updateAccountList, addAccount};
};
