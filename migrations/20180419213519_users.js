
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', function(table) {
    table.increments('id')
    table.text('mealName').notNullable()
    table.text('picURL').notNullable()
    table.text('instructionsURL').notNullable()
    table.text('ingredients').notNullable()
    table.text('justInCase')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meals')
}
