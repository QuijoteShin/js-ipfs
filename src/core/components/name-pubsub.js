'use strict'

const debug = require('debug')
const promisify = require('promisify-es6')

const log = debug('jsipfs:namePubsub')
log.error = debug('jsipfs:namePubsub:error')

module.exports = function namePubsub (self) {
  return {
    /**
     * Query the state of IPNS pubsub.
     *
     * @returns {Promise|void}
     */
    state: promisify((callback) => {
      // TODO: Add more conditions and create a new function for verifying if enabled
      const enabled = self._options.EXPERIMENTAL.ipnsPubsub

      console.log('pubsub', self._libp2pNode._floodSub)

      callback(null, enabled ? 'enabled' : 'disabled')
    }),
    /**
     * Cancel a name subscription.
     *
     * @param {String} name subscription name.
     * @param {function(Error)} [callback]
     * @returns {Promise|void}
     */
    cancel: promisify((name, callback) => {
      callback(null, `cancel: ${name}`)
    }),
    /**
     * Show current name subscriptions.
     *
     * @param {function(Error)} [callback]
     * @returns {Promise|void}
     */
    subs: promisify((callback) => {
      callback(null, 'subs')
    })
  }
}
