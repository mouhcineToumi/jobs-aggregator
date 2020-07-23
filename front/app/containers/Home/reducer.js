/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LIST_JOBS_DONE,
  INCRI_COUNTER,
  LIST_JOBS_LOCALISATION_DONE,
} from './constants';

export const initialState = {
  jobs: [],
  localisation: [],
  counter: 5,
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
      case LIST_JOBS_LOCALISATION_DONE:
        draft.localisation = action.localisation;
        break;
      case INCRI_COUNTER:
        draft.counter += 5;
        break;
    }
  });

export default homeReducer;
