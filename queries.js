const database = require("./db/knex.js")

module.exports = {
  listmeals(){
    return database('meals').select()
  },
  readmeals(id){
    return database('meals').where("id", id).first()
  },
  addtomeals(meal){
    return database('meals').insert(meal).returning('*').then(record => record[0])
  },
  updatemeals(id, meal){
    return database('meals').update(meal).where("id", id).returning("*").then(record => record[0])
  },
  deletemeals(id){
    return database('meals').delete().where("id", id)
  },
  listusers(){
    return database('users').select()
  },
  readusers(id){
    return database('users').where("id", id).first()
  },
  createusers(user){
    return database('users').insert(user).returning('*').then(record => record[0])
  },
  updateusers(id, user){
    return database('users').update(user).where("id", id).returning("*").then(record => record[0])
  },
  deleteusers(id){
    return database('users').delete().where("id", id)
  }
}
