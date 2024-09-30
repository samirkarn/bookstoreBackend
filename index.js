import express from 'express'

require('dotenv').config()
const app = express()

console.log(process.env.PORT)
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/samir', (req, res) => {
    res.send('Hi Samir, Good Job!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})