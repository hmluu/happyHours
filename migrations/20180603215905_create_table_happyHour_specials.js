
exports.up = function(knex, Promise) {
  return knex.schema.createTable('happyHours', table => {
    table.increments();
    table.string('when', 64);
    table.string('spot', 64);
    table.string('address', 64);
    table.string('specials');
    table.float('prices', 2, 2);
    table.string('spot_url');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('happyHours');
};
