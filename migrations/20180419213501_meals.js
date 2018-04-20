
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.text('userName').notNullable()
    table.text('password').notNullable()
    table.text('mealIDs').notNullable()
    table.text('savedLists')
    table.text('justInCase')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
