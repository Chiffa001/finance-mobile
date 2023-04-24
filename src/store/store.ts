import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {middleware, reducer, reducerPath} from '~/services';

import {authStatusName, authStatusReducer} from './reducers/auth-status-slice';

const rootReducer = combineReducers({
  [authStatusName]: authStatusReducer,
  [reducerPath]: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
