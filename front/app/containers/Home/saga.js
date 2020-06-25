import { call, all, takeLatest } from 'redux-saga/effects';
import { callApi } from '../../services/saga/index';
import { LIST_JOBS } from './constants';
import { get } from '../../services/saga/request';
import { fetchJobsDoneAction } from './actions';

function* fetchListJobsSaga() {
  try {
    yield call(callApi, 'posts', get, null, fetchJobsDoneAction);
  } catch (e) {
    console.log(e);
  }
}
function* watchFetchListJobs() {
  yield takeLatest(LIST_JOBS, fetchListJobsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchListJobs()]);
}
