const express = require('express')
const app = express()
const multer  = require('multer')
const path = require('path')
const port = process.env.PORT || 3000


// multer file storage
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        // unique filename
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({ storage })

// middleware
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload',upload.single('image'), (req, res) => {
   if(!req.file) return res.status(400).json({error: 'File not found'})

    res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file.filename
    })
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})