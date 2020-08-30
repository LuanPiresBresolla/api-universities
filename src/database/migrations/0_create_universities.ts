import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('universities', table => {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.string('name').notNullable();
    table.string('ibge').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.string('zipcode', 8).notNullable();
    table.string('street').notNullable();
    table.string('number').notNullable();
    table.string('neighborhood').notNullable();
    table.string('phone').notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('universities');
}
