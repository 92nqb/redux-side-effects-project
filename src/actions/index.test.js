
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  performRequest,
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED,
} from './index';

import { API_ENDPOINT } from '../api';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('performRequest action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  const responseHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };

  const initialState = {
    status: 'initial',
    id: false,
    title: false,
    detail: false,
  };

  it('Should dispatch a `REQUEST_SUCCEEDED` action', () => {
    const mockRes = {
      data: {
        type: 'response',
        id: 1,
        attributes: {
          title: 'The backend responded with an successful message',
          detail: 'The service only respond in even requests',
        },
      },
    };
    nock(API_ENDPOINT)
     .get('/even')
     .reply(200, mockRes, responseHeaders);

    const expectedActions = [{
      type: REQUEST_STARTED
    },{
      type: REQUEST_SUCCEEDED,
      payload: {
        id: 1,
        title: 'The backend responded with an successful message',
        detail: 'The service only respond in even requests',
      },
    }];

    // get the Store
    const store = mockStore(initialState);
    return store.dispatch(performRequest())
      // gather the actions that were launched
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Should dispatch a `REQUEST_FAILED` action', () => {
    const mockRes = {
      errors: [{
        status: 500,
        title: 'The backend responded with an error',
        detail: 'The service not responding in odd requests',
      }],
    };
    nock(API_ENDPOINT)
     .get('/even')
     .reply(500, mockRes, responseHeaders);

    const expectedActions = [{
      type: REQUEST_STARTED
    },{
      type: REQUEST_FAILED,
      error: {
        title: 'The backend responded with an error',
        detail: 'The service not responding in odd requests',
      },
    }];
    // get the Store
    const store = mockStore(initialState);
    return store.dispatch(performRequest())
      // gather the actions that were launched
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
