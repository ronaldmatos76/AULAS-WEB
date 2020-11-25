
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('name').notNullLabel;
        table.string('email').notNullLabel;
        table.integer('idade');
        table.string('empresa');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
