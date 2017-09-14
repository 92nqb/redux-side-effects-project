
import { loop, Cmd } from 'redux-loop';
import appReducer from './app';

import { STATE_PENDING, callEvenApi } from '../api';
import { requestStart, requestReceived, requestFailed } from '../actions';

describe('redux loop', () => {
  it('test', () => expect(appReducer(undefined, requestStart())).toEqual(loop({
      status: STATE_PENDING,
      id: false,
      title: false,
      detail: false,
    }, Cmd.run(callEvenApi, {
      successActionCreator: requestReceived,
      failActionCreator: requestFailed,
  }))));
});
