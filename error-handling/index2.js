const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3000



// app.get('/', (req, res) => {
//   throw new Error('Something went wrong')
// })
app.get('/', (req, res, next) => {
  const error = new Error ('Something went wrong to you')
  error.status = 500
  next(error)
})

const errorMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).join({
        success:false,
        message:err.message || "internal Server Error,"
    })
}

// use the middleware
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})