
const errorResponse = () => ({
  errors: [{
    status: 500,
    title: 'The backend responded with an error',
    detail: 'The service not responding in odd requests',
  }],
});

const successResponse = (counter) => ({
  data: {
    type: 'response',
    id: counter,
    attributes: {
      title: 'The backend responded with an successful message',
      detail: 'The service only respond in even requests',
    },
  },
})

function* responses() {
  let counter = 0;
  while (true) {
    if (counter % 2 === 0) {
      yield Promise.resolve(successResponse(counter));
    } else {
      yield Promise.reject(errorResponse());
    }
    counter++;
  }
}


module.exports = responses;
