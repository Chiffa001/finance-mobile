import {useCallback, useEffect} from 'react';

import {
  addOperation,
  getOperationInfo,
} from '~/store/actions/operation-actions';
import {selectOperationData} from '~/store/selectors';
import {OperationData} from '~/types/operation';

import {useAppDispatch} from './use-app-dispatch';
import {useAppSelector} from './use-app-selector';

export const useOperationList = (accountId: number) => {
  const {failed, inProgress, isDone, list} = useAppSelector(
    selectOperationData(accountId),
  );
  const dispatch = useAppDispatch();

  const updateOperationList = useCallback(() => {
    dispatch(getOperationInfo(accountId));
  }, [accountId, dispatch]);

  const addNewOperation = useCallback(
    async (data: OperationData) => {
      await dispatch(
        addOperation({
          accountId,
          ...data,
        }),
      );
    },
    [accountId, dispatch],
  );

  useEffect(() => {
    if (failed || inProgress || isDone) {
      return;
    }

    updateOperationList();
  }, [failed, inProgress, isDone, updateOperationList]);

  return {
    failed,
    inProgress,
    list,
    updateOperationList,
    addNewOperation,
  };
};
