// @flow
'use strict'

const OneBlinkAPI = require('../lib/one-blink-api.js')

module.exports = (tenant /* : Tenant */) =>
  class Keys extends OneBlinkAPI {
    constructor(options /* : ConstructorOptions */) {
      options = options || {}
      super(options.accessKey, options.secretKey, tenant)
    }

    getKey(keyId /* : ?mixed */) /* : Promise<Key> */ {
      if (typeof keyId !== 'string') {
        return Promise.reject(new TypeError('Must supply "keyId" as a string'))
      }

      return super.getRequest(`/keys/${keyId}`)
    }
  }
