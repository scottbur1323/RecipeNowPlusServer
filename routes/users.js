const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get("/", (request, response, next) => {
  if (request.get('origin') == "https://recipe-now-app.firebaseapp.com" || request.get('origin') == "http://localhost:8080") {
        queries.listusers().then(users => {
            response.json({users})
        })
        .catch(next)
  }  else console.log("No Access From This Site")
})

router.get("/:id", (request, response, next) => {
    queries.readusers(request.params.id).then(users => {
        users
            ? response.json({users})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.createusers(request.body).then(users => {
        response.status(201).json({users});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.deleteusers(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.updateusers(request.params.id, request.body).then(users => {
        response.json({users});
    }).catch(next);
});

module.exports = router
