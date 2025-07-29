const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

// static file
app.use(express.static(path.join(process.cwd(), 'public')))

// config template engine
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// sample products data
const products = [
  {id: 1, name: "Laptop", description: "This is a apple laptop", price: 1000},
  {id: 2, name: "Mouse", description: "This is a Logitech mouse", price: 50},
  {id: 3, name: "Keyboard", description: "This is a Logitech keyboard", price: 100}
]


app.get('/', (req, res) => {
  res.render('index', {title: 'Product List', products})
})

// dynamic product routes
app.get('/product/:id', (req, res) => {
  const productId = req.params.id

  const product = products.find(product => product.id === parseInt(productId))
  if(!product){
    res.status(404).send('Product not found!')
  }

  res.render('product', {product})
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})