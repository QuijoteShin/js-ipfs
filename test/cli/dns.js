/* eslint-env mocha */
'use strict'

const expect = require('chai').expect

module.exports = (thing) => describe('dns', () => {
  let ipfs

  before(function () {
    this.timeout(60 * 1000)
    ipfs = thing.ipfs
  })

  it('resolve ipfs.io dns', function () {
    this.timeout(60 * 1000)

    return ipfs('dns ipfs.io').then((res) => {
      expect(res.substr(0, 6)).to.eql('/ipfs/')
    })
  })
})
