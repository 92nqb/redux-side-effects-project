
import { call, put, takeLatest } from 'redux-saga/effects';
import { callEvenApi } from '../api';
import { REQUEST_STARTED, requestReceived, requestFailed } from '../actions';

export function* performRequest() {
  try {
    const response = yield call(callEvenApi);
    yield put(requestReceived(response));
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export default function* watcher() {
  yield takeLatest(REQUEST_STARTED, performRequest);
}
