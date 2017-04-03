'use strict'
const path = require('path')
const api = require('express').Router()
const quotes = require(path.join(__dirname, '/../pratchett.json'))

function searchQuotes (searchStr) {
  const arr = []
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].indexOf(searchStr) !== -1) {
      arr.push(quotes[i])
    }
  }
  return arr
}

api.get('/', (req, res) => {
  res.send({
    result: req.query.contains ? searchQuotes(req.query.contains) : quotes[Math.floor(Math.random() * quotes.length)]
  })
})

module.exports = api
