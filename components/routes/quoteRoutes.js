const path = require('path')
const api = require('express').Router()
const quotes = require(path.join(__dirname, '/../pratchett.json'))

api.get('/getRandom', (req, res) => {
  res.send({
    quote: quotes[Math.floor(Math.random() * quotes.length)]
  })
})

module.exports = api
