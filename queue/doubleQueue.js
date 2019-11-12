const Queue = require('./index')
const util = require('../util')

const DoubleQueue = function () {
  Queue.call(this)
}

util.inheritPrototype(DoubleQueue, Queue)

DoubleQueue.prototype.enqueueFront = function (element) {
  this.data.unshift(element)
}

DoubleQueue.prototype.dequeueEnd = function () {
  return this.data.pop()
}

module.exports = DoubleQueue
