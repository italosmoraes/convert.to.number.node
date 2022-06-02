import express from 'express'

const server = express()

const PORT = 3001

server.get('/', (req, res) => {
  console.log('--- request', req)

  res.send('whats up?!')
})

server.listen(PORT, () => {
  return console.log(`Server is listening at http://localhost:${PORT}`)
})
