import { configureStore } from '@reduxjs/toolkit';
import { applicationReducer } from '@common/redux/reducers';

export const store = configureStore({
  reducer: {
    app: applicationReducer,
  },
});
