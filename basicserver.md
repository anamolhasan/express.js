

```bash 
const express = require('express')

const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
  res.send('Server is running ........')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})


``` "start": "nodemon index.js",
