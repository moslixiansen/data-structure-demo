function Queue () {
  this.data = []
}

Queue.prototype.enqueue = function (item) {
  this.data.push(item)
}

Queue.prototype.dequeue = function (item) {
  this.data.shift()
}

Queue.prototype.length = function () {
  return this.data.length
}

Queue.prototype.clear = function () {
  this.data = []
}

Queue.prototype.front = function () {
  return this.data[0]
}

Queue.prototype.last = function () {
  if (this.length < 1) {
    return null
  }
  return this.data[this.length - 1]
}