const express = require('express')
const errorHandler = require('./middlware/errorHandler')
const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res, next) => {
  const error = new Error('Error on HomePage')
  next(error)
})

// call middleware
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})