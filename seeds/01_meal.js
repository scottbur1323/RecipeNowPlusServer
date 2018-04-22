
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "meals"; ALTER SEQUENCE meals_id_seq RESTART WITH 4;')
    .then(function () {
      var meal = [{
        id: 1,
        mealName: 'Tuna Noodle Casserole',
        picURL: '/static/tnc.png',
        instructionsURL: 'https://www.campbells.com/kitchen/recipes/classic-tuna-noodle-casserole/',
        ingredients: '1 can cream of celery soup, 1/2 cup milk, 1 cup frozen peas, 2 cans of tuna, 4 oz egg noddles, 2 tbsp bread crumbs, 1 tbsp butter, 2 tbsp chopped pimiento',
        justInCase: ''
      },{
        id: 2,
        mealName: 'BLTs',
        picURL: '/static/blt.png',
        instructionsURL: 'http://www.geniuskitchen.com/recipe/classic-blt-sandwich-129615',
        ingredients: '1/2 lb bacon, 1 loaf bread, 1 head iceberg lettuce, 2 large tomatoes, 1 cup mayonaise',
        justInCase: ''
      },{
        id: 3,
        mealName: 'Egg Salad Sandwiches',
        picURL: '/static/ess.png',
        instructionsURL: 'https://www.foodnetwork.com/recipes/tyler-florence/egg-salad-sandwich-with-avocado-and-watercress-recipe-1915683',
        ingredients: '6 eggs, 1/4 cup mayonaise, 1 tsp dijon mustard, 1/2 lemon, 1 loaf bread, 1 avocado, 1/2 bunch watercress',
        justInCase: ''
      }]
      return knex('meals').insert(meal)
    })
}
