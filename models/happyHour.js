const knex = require('../database');

const index = () =>
  knex('happy_hours')
  .then(result => result)
  .catch(error => {
    console.error(error);
  });

const show = (id) =>
  knex('happy_hours')
  .where('id', id)
  .then(result => result[0])
  .catch(error => {
    console.error(error);
  });

const create = (data) =>
  knex('happy_hours')
  .returning('*')
  .insert(data)
  .then(result => result[0])
  .catch(error => {
    console.error(error);
  });

const update = (id, data) =>
  knex('happy_hours')
  .returning('*')
  .where('id', id)
  .update({...data, updated_at: knex.fn.now()})
  .then(result => result[0])
  .catch(error => {
    console.error(error);
  });

const destroy = id =>
  knex('happy_hours')
  .returning('*')
  .where('id', id)
  .del()
  .then(result => result[0])
  .catch(error => {
    console.error(error);
  });


  module.exports = {
    index,
    show,
    create,
    update,
    destroy
  };
