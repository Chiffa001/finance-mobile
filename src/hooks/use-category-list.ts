import {useEffect} from 'react';

import {getAllCategories} from '~/store/actions/category-actions';
import {selectCategories} from '~/store/selectors';
import {TransactionTypes} from '~/types/transaction';

import {useAppDispatch} from './use-app-dispatch';
import {useAppSelector} from './use-app-selector';

export const useCategoryList = (type: TransactionTypes) => {
  const {list, failed, inProgress, isDone} = useAppSelector(
    selectCategories(type),
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (failed || inProgress || isDone) {
      return;
    }

    dispatch(getAllCategories(type));
  }, [dispatch, failed, inProgress, isDone, type]);

  return {
    failed,
    inProgress,
    list,
  };
};
