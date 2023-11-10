import { createReducer } from '@reduxjs/toolkit';

import { closeModalAction, openModalAction } from '../actions';

export type ApplicationReducerState = {
  openedModalIds: string[];
  modalProps: Record<string, unknown>;
};

const applicationReducerInitialState: ApplicationReducerState = {
  openedModalIds: [],
  modalProps: {},
};

export const applicationReducer = createReducer(applicationReducerInitialState, (builder) => {
  builder
    .addCase(openModalAction, (state, action) => {
      if (!state.openedModalIds.includes(action.payload.modalId)) {
        state.openedModalIds.push(action.payload.modalId);
        if (action.payload.modalProps) state.modalProps[action.payload.modalId] = action.payload.modalProps;
      }
    })
    .addCase(closeModalAction, (state, action) => {
      const index = state.openedModalIds.indexOf(action.payload.modalId);
      if (index !== -1) {
        state.openedModalIds.splice(index, 1);
        delete state.modalProps[action.payload.modalId];
      }
    });
});
