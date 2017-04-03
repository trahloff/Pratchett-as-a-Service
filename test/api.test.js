/* ---------------------Require Dependencies that are used for all tests--------------------- */
const chai = require('chai').use(require('chai-http')) // TODO consider using superagent
const should = chai.should()
const path = require('path')
const server = require(path.join(__dirname, '/../app'))

'use strict'

it('should return a function as server', done => {
  server.should.be.a('function')
  done()
})

it('GET /quotes should return single random quote', done => {
  chai.request(server)
        .get('/quotes')
        .end((err, res) => {
          ;(err === null).should.be.true
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.result.should.be.a('string')
          done()
        })
})

it('GET /quotes?contains=having should return an array and contain a quote', done => {
  chai.request(server)
        .get('/quotes?contains=having')
        .end((err, res) => {
          ;(err === null).should.be.true
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.result.should.be.an('array')
          res.body.result[0].should.be.a('string')
          done()
        })
})
