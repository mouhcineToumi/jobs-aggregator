/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LIST_JOBS_DONE } from './constants';

export const initialState = {
  jobs: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LIST_JOBS_DONE:
        draft.jobs = action.jobs;
        break;
    }
  });

export default homeReducer;
