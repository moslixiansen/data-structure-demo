const Node = require('./node')
const LList = require('./linkedList')

const PNode = function (element, next, previous) {
  Node.call(this, element, next)
  this.previous = previous
}

const DoubleLList = function (node) {
  LList.call(this, node)
}
