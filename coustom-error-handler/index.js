const express = require('express')
const CustomError = require('./src/utils/customError')
const errorHandler = require('./src/middleware/errorHandler')
const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
  res.send('Welcome to the Express Error Handling Demo')
})

app.get('/not-found', (req, res, next) => {
    next(new CustomError('Not Found Error', 404))
})

app.get('/unauthorized', (req, res, next) => {
    next( new CustomError('Unauthorized Access', 401))
})

// for normal error handling
app.get('/normal-error', (req, res, next) => {
    next(new Error('This is a normal error , just ignore it'))
})

// call error handler middleware
app.use(errorHandler)



app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})