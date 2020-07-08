/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_JOBS,
  LIST_JOBS_DONE,
  INCRI_COUNTER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function fetchListJobs() {
  return {
    type: LIST_JOBS,
  };
}
export function fetchJobsDoneAction(jobs) {
  return {
    type: LIST_JOBS_DONE,
    jobs,
  };
}

export function increCounterAction() {
  return {
    type: INCRI_COUNTER,
  };
}
