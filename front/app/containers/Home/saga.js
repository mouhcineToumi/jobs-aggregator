import { call, all, takeLatest } from 'redux-saga/effects';
import { callApi } from '../../services/saga/index';
import { LIST_JOBS, LIST_JOBS_LOCALISATION } from './constants';
import { get } from '../../services/saga/request';
import { fetchJobsDoneAction, fetchLocalisationDoneAction } from './actions';

function* fetchListJobsSaga() {
  try {
    yield call(callApi, 'offers', get, null, fetchJobsDoneAction);
  } catch (e) {
    console.log(e);
  }
}
function* watchFetchListJobs() {
  yield takeLatest(LIST_JOBS, fetchListJobsSaga);
}

function* fetchListLocalisationSaga() {
  try {
    yield call(callApi, 'cities', get, null, fetchLocalisationDoneAction);
  } catch (e) {
    console.log(e);
  }
}
function* watchFetchListLocalisation() {
  yield takeLatest(LIST_JOBS_LOCALISATION, fetchListLocalisationSaga);
}

export default function* rootSaga() {
  yield all([watchFetchListJobs(), watchFetchListLocalisation()]);
}
