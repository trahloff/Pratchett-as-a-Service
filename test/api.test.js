/* ---------------------Require Dependencies that are used for all tests--------------------- */
const chai = require('chai').use(require('chai-http')) // TODO consider using superagent
const should = chai.should()
const path = require('path')
const server = require('../app')

describe('REST', () => {

  it('should return a function as server', done => {
    server.should.be.a('function')
    done()
  })

  it('GET /quotes/getRandom should return single DB Entry', done => {
    chai.request(server)
        .get('/quotes/getRandom')
        .end((err, res) => {
          ;(err === null).should.be.true
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.quote.should.be.a('string')
          done()
        })
  })

})
