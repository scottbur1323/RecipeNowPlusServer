const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get("/", (request, response, next) => {
    queries.listmeals().then(meals => {
        response.json({meals})
    }).catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.readmeals(request.params.id).then(meals => {
        meals
            ? response.json({meals})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.addtomeals(request.body).then(meals => {
        response.status(201).json({meals});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.deletemeals(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.updatemeals(request.params.id, request.body).then(meals => {
        response.json({meals});
    }).catch(next);
});

module.exports = router
