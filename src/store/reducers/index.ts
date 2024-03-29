import {combineReducers} from '@reduxjs/toolkit';

import {accountReducer} from './account-reducer';
import {authReducer} from './auth-reducer';
import {categoryReducer} from './category-reducer';
import {currencyReducer} from './currency-reducer';
import {operationReducer} from './operation-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  operation: operationReducer,
  currency: currencyReducer,
  category: categoryReducer,
});
