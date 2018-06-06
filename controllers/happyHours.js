const happyHourModel = require('../models/happyHour');

const index = (request, response) => {
  happyHourModel.index()
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      console.error(error);
    });
}

const show = (request, response) => {
  happyHourModel.show(request.params.id)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      console.error(error);
    });
}

const create = (request, response) => {
  happyHourModel.create(request.body)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      console.error(error);
    });
}

const update = (request, response) => {
  happyHourModel.update(request.params.id, request.body)
    .then(result => {response.send(result);})
    .catch(error => {
      console.error(error);
    });
}

const destroy = (request, response) => {
  happyHourModel.destroy(request.params.id)
  .then(result => {
    response.send(result);
  })
  .catch(error => {
    console.error(error);
  });
}
module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
