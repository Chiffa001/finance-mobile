import {configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './reducers/index';

export const store = configureStore({
  reducer: rootReducer,
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
