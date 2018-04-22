const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/f2f', (req, res, next) => {
  console.log(req)
  runFood2Fork(req)
  .then(recipes => {
    res.send(recipes)
  })
  .catch(next)
})

function runFoodToFork(itemsToSearch) {
  console.log('made it to f2f!')
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
