import { ApplicationReducerState } from '@common/redux/reducers/application';

export { applicationReducer } from './application';

export type StateType = {
  app: ApplicationReducerState;
};
