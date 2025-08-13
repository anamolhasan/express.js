const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000


// middleware
app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/', (req, res) => {
  const pathURL = path.join(process.cwd(), 'public', 'index.html')
  res.sendFile(pathURL)
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})