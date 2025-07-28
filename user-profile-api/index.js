const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send('Welcome to User Profile Server')
})

app.get('/api/profile', (req, res) => {
    const user = [
        {
            id:1,
            name:'anam',
            email:'anam@example.com',
            phone:'01484277782'
        },
        {
            id:2,
            name:'hasan',
            email:'hasan@example.com',
            phone:'01384277782'
        },
        {
            id:1,
            name:'shakil',
            email:'shakil@example.com',
            phone:'01284277782'
        },
    ]


    res.status(200).send(user)
})


// set cookies
app.get('/set-custom-cookie', (req, res) => {
    res.cookie('customCookie', '123xyz', {
        maxAge:60000,
        httpOnly:true,
        secure:true
    })
    res.send(`Cookie set successfully`)
})

app.get('/get-custom-cookie', (req, res) => {
    const cookie = req.cookies.customCookie
    console.log(cookie)
    res.send(`Your custom cookies is : ${cookie}`)
})


app.get('/delete-custom-cookie', (req, res) => {
    res.clearCookie('customCookie')
    res.send(`Cookie deleted successfully`)
})

app.get('/profile', (req, res) => {
    const cookie = req.cookies.customCookie
    if(!cookie){
        return res.status(401).json({message:'unauthorized access!'})
    }
    const filePath = path.join(process.cwd(), 'public', 'profile.html')
    res.sendFile(filePath)
})


app.listen(port, ()=> {
    console.log(`The server is listening on http://localhost:${port}`)
})