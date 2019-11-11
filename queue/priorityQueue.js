const Queue = require('./index')
const bubbleSort= require('../sort/bubbleSort')

function Item (name, priority) {
  this.name = name
  this.priority = priority
}

function PriorityQueue () {
  Queue.call(this)
}

function inheritPrototype (SuperType, SubType) {
  const prototype = Object.create(SuperType.prototype)
  prototype.constructor = SubType
  SubType.prototype = prototype
}

inheritPrototype(Queue, PriorityQueue)

PriorityQueue.prototype.dequeueByPriority = function () {
  let maxIndex = this.data.length - 1
  let i = maxIndex - 1

  while (i > -1) {
    if (this.data[i].priority > this.data[maxIndex].priority) {
      maxIndex = i
    }
    i--
  }

  return this.data[maxIndex]
}

const sortFn = function (a, b) {
  return a['priority'] < b['priority']
}

PriorityQueue.prototype.displayByPriority = function () {
  const data = JSON.parse(JSON.stringify(this.data))
  bubbleSort(data, sortFn)
  console.log(data)
}

const pq = new PriorityQueue()
pq.enqueue(new Item('a', 1))
pq.enqueue(new Item('d', 4))
pq.enqueue(new Item('b', 2))
pq.enqueue(new Item('k', 11))
pq.enqueue(new Item('g', 7))
pq.enqueue(new Item('c', 3))

pq.display()
console.log('----------------')
pq.displayByPriority()

module.exports = PriorityQueue
