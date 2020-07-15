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

const selectAllLocations = createSelector(
  selectHomeDomain,
  substate => substate.localisation,
);

const counter = createSelector(
  selectHomeDomain,
  substate => substate.counter,
);
export { selectAllJobs, counter, selectAllLocations };
