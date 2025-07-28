const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Server is running.....')
})

// set headers
app.get('/headers', (req, res) => {
    res.set('Custom-Headers-1', 'This is a custom header')
    res.send('Headers set correctly!')
})

// set cookies
app.get('/set-cookie', (req, res) => {
    const token = 'lsfjkfg489driut5439tjdor58'
    res.cookie('token', token, {
        httpOnly:true,
        secure:true,
        expires: new Date(Date.now()+900000)
    })
    res.send('Cookie set successfully')
})

// get cookies
app.get('/dashboard', (req, res) => {
    const token = req.cookies.token
    console.log(token)
    if(!token) {
        return res.send('You are not authenticated!')
    }

    res.send('Welcome to dashboard')
})

// clear cookies
app.get('/clear-cookies', (req, res) => {
    res.clearCookie('token')
    res.send('Cookies cleared successfully!')
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:/${port}`)
})