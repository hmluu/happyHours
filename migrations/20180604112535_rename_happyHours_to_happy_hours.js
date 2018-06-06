
exports.up = function(knex, Promise) {
  return knex.schema.renameTable('happyHours', 'happy_hours')
};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable('happy_hours', 'happyHours')
};
