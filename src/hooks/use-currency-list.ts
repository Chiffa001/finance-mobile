import {useEffect} from 'react';

import {getCurrencyList} from '~/store/actions/currency-actions';

import {useAppDispatch} from './use-app-dispatch';
import {useAppSelector} from './use-app-selector';

export const useCurrencyList = () => {
  const {list, inProgress, failed, isDone} = useAppSelector(
    state => state.currency,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (failed || inProgress || isDone) {
      return;
    }

    dispatch(getCurrencyList());
  }, [dispatch, failed, inProgress, isDone]);

  return {list, inProgress, failed};
};
