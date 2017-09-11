
const errorResponse = () => new Promise(
  (resolve, reject) => setTimeout(() => reject({
    errors: [{
      status: 500,
      title: 'The backend responded with an error',
      detail: 'The service not responding in odd requests',
    }],
  }), 1000)
);

const successResponse = (counter) => new Promise(
  (resolve) => setTimeout(() => resolve({
    data: {
      type: 'response',
      id: counter,
      attributes: {
        title: 'The backend responded with an successful message',
        detail: 'The service only respond in even requests',
      },
    },
  }), 1000)
);

function* responses() {
  let counter = 0;
  while (true) {
    if (counter % 2 === 0) {
      yield successResponse(counter);
    } else {
      yield errorResponse();
    }
    counter++;
  }
}


module.exports = responses;
