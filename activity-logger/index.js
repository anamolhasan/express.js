const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port = 3000


app.use(activityLogger)


app.get('/', (req, res) => {
  res.send('Activity Logger Application')
})

app.get('/about', (req, res) => {
  res.send('Activity Logger about Application')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
