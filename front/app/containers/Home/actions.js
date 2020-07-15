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
  LIST_JOBS_LOCALISATION,
  LIST_JOBS_LOCALISATION_DONE,
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

export function fetchListLocalisation() {
  return {
    type: LIST_JOBS_LOCALISATION,
  };
}
export function fetchLocalisationDoneAction(localisation) {
  return {
    type: LIST_JOBS_LOCALISATION_DONE,
    localisation,
  };
}

export function increCounterAction() {
  return {
    type: INCRI_COUNTER,
  };
}
