const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

// configuration
app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: false}))
app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
    const userData = {
        name:'anam',
        email:'anam@hasan.com',
        role:3432,
        isAdmin:false,
        hobbies:['coding', 'sleep', 'reading']
    }
  res.render('profile', userData)
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})