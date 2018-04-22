const database = require("./db/knex.js")

module.exports = {
  listmeals(){
    return database('users').select()
  },
  readmeals(id){
    return database('users').where("id", id).first()
  },
  addtomeals(meal){
    return database('users').insert(meal).returning('*').then(record => record[0])
  },
  updatemeals(id, meal){
    return database('users').update(meal).where("id", id).returning("*").then(record => record[0])
  },
  deletemeals(id){
    return database('users').delete().where("id", id)
  },
  listmeals(){
    return database('meals').select()
  },
  readmeals(id){
    return database('meals').where("id", id).first()
  },
  createmeals(user){
    return database('meals').insert(user).returning('*').then(record => record[0])
  },
  updatemeals(id, user){
    return database('meals').update(user).where("id", id).returning("*").then(record => record[0])
  },
  deletemeals(id){
    return database('meals').delete().where("id", id)
  }
}
