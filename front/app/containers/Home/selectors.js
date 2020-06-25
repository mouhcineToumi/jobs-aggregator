import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.home || initialState;

const selectAllJobs = createSelector(
  selectHomeDomain,
  substate => substate.jobs,
);
export { selectAllJobs };
