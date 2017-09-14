
import { loop, Cmd } from 'redux-loop';

import {
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED,
  requestReceived,
  requestFailed,
} from '../actions';

import {
  STATE_PENDING,
  STATE_SUCCESSFUL,
  STATE_FAILURE,
  callEvenApi,
 } from '../api';

const initialState = {
  status: 'initial',
  id: false,
  title: false,
  detail: false,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
      return loop({
        ...state,
        status: STATE_PENDING,
        id: false,
        title: false,
        detail: false,
      }, Cmd.run(callEvenApi, {
        successActionCreator: requestReceived,
        failActionCreator: requestFailed,
      }));
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        status: STATE_SUCCESSFUL,
        id: action.payload.id,
        title: action.payload.title,
        detail: action.payload.detail,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        status: STATE_FAILURE,
        title: action.error.title,
        detail: action.error.detail,
      };
    default:
      return state;
  }
}


export default appReducer;
