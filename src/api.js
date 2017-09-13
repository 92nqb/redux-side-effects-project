
export const API_ENDPOINT = 'http://localhost:8080/api';

export const STATE_SUCCESSFUL = 'successful';
export const STATE_PENDING = 'pending';
export const STATE_FAILURE = 'failure';

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText || response.status);
  const bodyJSON = await response.json();
  error.response = bodyJSON
  return Promise.reject(error);
}

function parseJSON(response) {
  return response.json();
}

export const callEvenApi = () => fetch(`${API_ENDPOINT}/even`, { method: 'get' })
  .then(checkStatus)
  .then(parseJSON);
