// the purpose of a migration file: record changes to the database schema
// Constraints (rules)
// has two functions 1-up: defines/describes the changes to apply to the db when the migration runs

// this step is defining/describing a table, table not created yet
exports.up = function(knex) {
  return knex.schema.createTable("menu_items", tbl => {
    // a primary key called 'id', is an unsigned integer, that autoincrements
    tbl.increments();
   // .index makes searching by this column faster 
    tbl.string("name", 512).notNullable().unique().index();
    tbl.decimal("price", 8, 2); // precision of 8 with 2 decimal points

    // relational dbs store booleans as 1(t) and 0(f)
    tbl.boolean("available").defaultTo(false);
  })
};

// has two functions 2-down: describes how to undo the changes
// run the down function using knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("menu_items");
};
