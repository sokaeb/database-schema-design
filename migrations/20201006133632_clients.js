// description of a change that needs to be reflected on the database, use the command knex migrate:latest, otherwise the db doesn't know about the changes
exports.up = function(knex) {
    return knex.schema.createTable('clients', tbl => {
        tbl.string('id').primary();
        // tbl.primary('id') // another way of creating a pk

        tbl.string('name').notNullable().index();
        tbl.string('email').unique().index();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clients');
  
};
