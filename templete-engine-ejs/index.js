const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { title } = require('process')

// set EJS as the template engine
app.set('view engine', 'ejs')

// set views directory (folder containing)
app.set('views', path.join(process.cwd(), 'views'))


app.get('/', (req, res) => {
  res.render('index', {title: 'Home Page', message: 'Welcome to EJS'})
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})
