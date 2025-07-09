export const up = function(knex) {
  return knex.schema.createTable('hashpwd', function(table) {
    table.increments('id').primary();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

export const down = function(knex) {
  return knex.schema.dropTable('hashpwd');
};
