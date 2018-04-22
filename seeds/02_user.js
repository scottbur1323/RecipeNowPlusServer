
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "meals"; ALTER SEQUENCE meals_id_seq RESTART WITH 4;')
    .then(function () {
      var user = [{
        id: 1,
        userName: 'chance',
        password: 'chance1',
        mealIDs: '1,3',
        savedLists: '',
        justInCase: ''
      },{
        id: 2,
        userName: 'shaun',
        password: 'shaun1',
        mealIDs: '2',
        savedLists: '',
        justInCase: ''
      },{
        id: 3,
        userName: 'seth',
        password: 'seth1',
        mealIDs: '1,2,3',
        savedLists: '',
        justInCase: ''
      }]
      return knex('meals').insert(user)
    })
}
