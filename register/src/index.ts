import express from 'express'

const cors = require('cors')
const app = express()

app.use(cors())
const port = 5002
app.get('/events', (_, res) => {
  console.log('register service got an event')
  res.status(200)
})
app.listen(port, () => console.log(`Register service running on port ${port}`))