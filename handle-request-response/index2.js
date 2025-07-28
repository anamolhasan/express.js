const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Server is running.....')
})

app.get('/inspect', (req, res) => {
    console.log(req)
    console.log('Request method:' , req.method)
    console.log('Request url:', req.url)
    // console.log('Parameters:', req.params)
    console.log('Query', req.query)
    console.log('headers:', req.headers)

    res.send('Inspect Request Now')
}) 

app.get('/text', (req, res) => {
    res.send('This is a text route')
})

app.get('/json', (req, res) => {
    res.json({message:'Hello, this is a json data.'})
})

app.get('/status', (req, res) => {
    res.status(404).send('Page not found')
})

app.get('/redirect', (req, res) => {
    res.redirect('/text')
    res.set()
    res.cookie('token', value)
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:/${port}`)
})