
import { performRequest } from './index';
import { call, put, takeLatest } from 'redux-saga/effects';
import { callEvenApi } from '../api';
import { requestReceived, requestFailed } from '../actions';

const responseFake = {
  data: {
    type: 'response',
    id: 1,
    attributes: {
      title: 'The backend responded with an successful message',
      detail: 'The service only respond in even requests',
    },
  },
};

describe('test saga', () => {
  it('should dispatch the `requestReceived` action', () => {
    const performRequestGen = performRequest();
    expect(performRequestGen.next().value).toEqual(call(callEvenApi));
    expect(performRequestGen.next(responseFake).value).toEqual(put(requestReceived(responseFake)));
  });
});
