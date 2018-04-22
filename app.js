const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()
require('dotenv').load()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.post('/f2f', (req, res, next) => {
  return runFood2Fork(req.body.items)
  .then(recipes => {
    res.send(recipes)
  })
  .catch(next)
})

function runFood2Fork(items) {
  let fullURL = "http://food2fork.com/api/search?key=" + process.env.F2F_KEY + items
  return fetch(fullURL)
  .then(res => {
    return res.json()
  })
  .then(recipes => {
    return recipes.recipes
  })
}

app.use('/meals-table', require('./routes/meals'))
app.use('/users-table', require('./routes/users'))

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    })
})

module.exports = app
