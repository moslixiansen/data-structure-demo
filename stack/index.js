function Stack () {
  this.top = 0
  this.data = []
}

Stack.prototype.push = function (record) {
  this.data[this.top++] = record
}

Stack.prototype.pop = function () {
  if (this.top <= 0) {
    return undefined
  }
  return this.data.splice(--this.top, 1)
}

Stack.prototype.peek = function () {
  if (this.top <= 0) {
    return undefined
  }
  return this.data[this.top - 1]
}

Stack.prototype.clear = function () {
  this.top = 0
  this.data = []
}

Stack.prototype.length = function () {
  return this.top
}

module.exports = Stack