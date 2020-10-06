
exports.up = function(knex) {
  // add a new column to an existing table
  return knex.schema.table('categories', tbl => {
      tbl.string('description', 256);
  })
};

exports.down = function(knex) {
  return knex.schema.table('categories', tbl => {
      tbl.dropColumn('description');
  })
};
