import {useEffect} from 'react';

import {getAllAccounts} from '~/store/actions/account-actions';

import {useAppDispatch} from './use-app-dispatch';
import {useAppSelector} from './use-app-selector';

export const useAccountList = () => {
  const {list, inProgress, failed, isDone} = useAppSelector(
    state => state.account,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (failed || inProgress || isDone) {
      return;
    }

    dispatch(getAllAccounts());
  }, [dispatch, failed, inProgress, isDone]);

  return {list, inProgress, failed};
};
