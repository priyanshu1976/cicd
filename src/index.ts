import express from 'express'

const app = express()
const port = 3000

app.get('/get', (req, res) => {
  res.send('Hello from server')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
