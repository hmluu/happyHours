
exports.up = function(knex, Promise) {
  return knex.schema.alterTable("happy_hours", table => {
    table.dropColumn('prices')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable("happy_hours", table => {
    table.float('prices', 2, 2)
  })
};
