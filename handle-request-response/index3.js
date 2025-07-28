const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Server is running.....')
})


// sending json file
app.get('/api/user', (req, res) => {
    const user = {
        id:1,
        name:'Anam',
        email:'anam@gmail.com'
    }

    res.status(200).json({
        success:true,
        message: 'User created successfully',
        user
    })
})

// sending html response
app.get('/html', (req, res) => {
    res.send('<h1>Welcome to Express! </h1> <p>This is a HTML Response</p>')
})


// sending file response
app.get('/file', (req, res) => {
    const filePath = path.join(process.cwd(), 'public', example.html)

    console.log(filePath)
    res.sendFile(filePath)
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:/${port}`)
})