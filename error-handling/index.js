const express = require('express')
const app = express()
const fs = require('fs')
const errorHandler = require('./src/middleware/errorHandler')
const port = process.env.PORT || 3000


app.get('/', (req, res, next) => {
    const error = new Error('Home route error')
    next(error)
})

app.get('/about', (req, res, next) => {
    fs.readFile('xyz.txt', (err, data) => {
        if(err) next(err)
            res.send(data.toString())
    })
})

app.get('/product', (req, res, next) => {
    try {
        res.send('Product Page')
    } catch (error) {
        next(error)
    }
})

// global middleware
app.use(errorHandler)




app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})