
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestStart = () => ({
  type: REQUEST_STARTED,
});

export const requestReceived = (response) => ({
  type: REQUEST_SUCCEEDED,
  payload: response,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});
