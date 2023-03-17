import {useEffect} from 'react';

import {getOperationInfo} from '~/store/actions/operation-actions';
import {selectOperationData} from '~/store/selectors';

import {useAppDispatch} from './use-app-dispatch';
import {useAppSelector} from './use-app-selector';

export const useOperationList = (accountId: number) => {
  const {failed, inProgress, isDone, list} = useAppSelector(
    selectOperationData(accountId),
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (failed || inProgress || isDone) {
      return;
    }

    dispatch(getOperationInfo(accountId));
  }, [accountId, dispatch, failed, inProgress, isDone]);

  return {
    failed,
    inProgress,
    list,
  };
};
