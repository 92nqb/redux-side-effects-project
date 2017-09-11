
import {
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED,
} from '../actions';

import {
  STATE_PENDING,
  STATE_SUCCESSFUL,
  STATE_FAILURE,
 } from '../api';

const initialState = {
  status: 'initial',
  id: false,
  title: false,
  detail: false,
};

export function appReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        status: STATE_PENDING,
        id: false,
        title: false,
        detail: false,
      };
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
