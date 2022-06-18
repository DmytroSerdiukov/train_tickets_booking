import express from 'express'
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
const port = 5001

app.use(cors({
    credentials: true,
    AccessControlAllowCredentials: true,
    AccessControlAllowOrigin: '*',
}));
app.use(bodyParser.json())

app.post('/events', (req, res) => {
    console.log('auth event')
    res.send('dsdasda')
    res.json({ res: 'working' })
})

app.post('/auth', (req, res) => {
    res.json({status: true, res: 1 })
})

app.get('/auth', (req, res) => {
    res.send('auth get route')
})
app.listen(port, () => console.log(`Auth service running on ${port} port`))