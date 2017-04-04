'use strict'
const path = require('path')
const api = require('express').Router()
const quotes = require(path.join(__dirname, '/../pratchett.json'))

function searchQuotes (searchStr) {
  return quotes.filter(q => {
    return q.indexOf(searchStr) !== -1
  })
}

api.get('/', (req, res) => {
  res.send({
    result: req.query.contains ? searchQuotes(req.query.contains) : quotes[Math.floor(Math.random() * quotes.length)]
  })
})

module.exports = api
