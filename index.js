const app = require("./app")

app.listen(process.env.PORT || 3000)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console))
