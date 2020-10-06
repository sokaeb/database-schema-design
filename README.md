Migrations is a record of a change you make to the database structure, over time (like git commits record changes to code)


Environments : defines where the file is running
- development env- most likely where you write and test yoru code (dev machine)
- production env- like heroku

Commonly used migration commands:
- npx knex migrate:make name...

Track Food AKA menu items
- id: primary key, unsigned (not negative numbers) integer.
- name: string, required (NOT NULL), unique, make searching by name fast.
- price: floating point, not required .
- available: boolean, default to false. 



