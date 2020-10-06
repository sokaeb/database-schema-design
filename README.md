Migrations: is a record of a change you make to the database structure, over time (like git commits record changes to code)


Environments : defines where the file is running
- development env- most likely where you write and test yoru code (dev machine)
- production env- like heroku

COMMONLY USED MIGRATION COMMANDS:
- npx knex migrate:make name... (knex migrate:make init) ---> creates a new migration file (init becomes the migration file name)
- npx knex migrate:latest ---> run pending migrations to update the database
- npx knex migrate:rollback ---> undo changes from the last migration (can be done multiple times, goes in order backwards)

Track Food AKA menu items
- id: primary key, unsigned (meaning no negative numbers) integer.- defaults to have the constraints unique and not null, also adds an index automatically
- name: string, required (NOT NULL), unique, make searching by name fast (use index).
- price: floating point, not required .
- available: boolean, default to false. 


Clients Table
- id: primary key, uuid, string, (unique, required --> default with pk)
- email: string, unique, indexed
- name: string, indexed (to be able to quickly search)

EVERY CHANGE TO THE DATABASE SCHEMA (the structure) SHOULD BE DONE WITH A NEW MIGRATION -- if you want to add a new table, create a new migration with knex migrate:make table_name


