const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 5050

// default middleware
app.use(express.json())
// file submit er middleware
app.use(express.urlencoded({extended:true}))
// app.use(express.static('src/public'))

// third party middleware
app.use(morgan('combined'))
app.use(cors())

// use the custom middleware globally
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/new-blog', (req, res) => {
  console.log(req.body)
  res.send('Blog created successfully!')
})


app.get('/product', (req, res) => {
  res.send('This is product page')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
