function Stack () {
  this.top = 0
  this.data = []
}

Stack.prototype.push = function (record) {
  this.data[this.top++] = record
}

Stack.prototype.pop = function () {
  return this.data.splice(--this.top)
}

Stack.prototype.peek = function () {
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