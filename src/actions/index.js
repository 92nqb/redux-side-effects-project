
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestStart = () => ({
  type: REQUEST_STARTED,
});

export const requestReceived = (response) => ({
  type: REQUEST_SUCCEEDED,
  payload: {
    id: response.data.id,
    title: response.data.attributes.title,
    detail: response.data.attributes.detail,
  },
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error: {
    title: error.response.errors[0].title,
    detail: error.response.errors[0].detail,
  },
});
