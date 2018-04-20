const database = require("./db/knex.js")

module.exports = {
  listmeals(){
    return database('meals').select()
  },
  readmeals(id){
    return database('meals').where("id", id).first()
  },
  createmeals(meal){
    return database('meals').insert(meal).returning('*').then(record => record[0])
  },
  updatemeals(id, meal){
    return database("meals").update(meal).where("id", id).returning("*").then(record => record[0])
  },
  deletemeals(id){
    return database("meals").delete().where("id", id)
  },
  listusers(){
    return database('users').select()
  },
  readusers(id){
    return database('users').where("id", id).first()
  },
  createusers(grocer){
    return database('users').insert(grocer).returning('*').then(record => record[0])
  },
  updateusers(id, grocer){
    return database("users").update(grocer).where("id", id).returning("*").then(record => record[0])
  },
  deleteusers(id){
    return database("users").delete().where("id", id)
  }
}
