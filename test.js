'use strict'

const assert = require('assert')
const surround = require('.')

describe('surround()', function () {
  it('should add a prefix and suffix if string is non-empty', function () {
    assert.strictEqual(surround('before', 'str', 'after'), 'beforestrafter')
  })

  it('should return nothing if string is empty', function () {
    assert.strictEqual(surround('before', '', 'after'), '')
  })
})
