const knex = require("knex");

const knexfile = require('../knesfile.js');

// on heroku, NODE_ENV will be 'production' -- when deployed to heroku, it will read the production configuration object
const environment = process.env.NODE_ENV || 'development';

const config = knexfile[environment];

module.exports = knex(config);