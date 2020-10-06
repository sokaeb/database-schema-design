// Update with your config settings.
// we need this knexfile to tell knex how to find and connect to the database
// removed staging environment bc not being used here
// the configuration should be based on the enviromnent (so when it's being run it knows which environment to run from, dev or prod) so that will be read from the environment itself

module.exports = {
  // configuration for the development enviroment db connection
  // tells knex how/where it can find the db, knex by default will use the development config object
  development: {
    client: 'sqlite3', // database driver
    connection: {
      filename: './database/food.db3' // which file am I using, knex will automatically create the file and apply changes to the db after running the command knex migrate:latest
    },
    useNullAsDefault: true // required for SQLite only
  },

  // configuration for the production enviroment (where the file is running) db connection
  production: {
    client: 'postgresql',
    connection: {
      host: 'postgresql://pgontheweb.com', // where the server is
      database: 'my_db', // which database 
      user:     'username', // server will grant or deny access to the db based on this and pw
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
