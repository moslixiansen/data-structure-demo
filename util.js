const isType = function (item) {
  return function (type) {
    return Object.prototype.toString.call(item) === `[object ${type}]`
  }
}

const swap = function (arr, i, j) {
  const value = arr[j]
  arr[j] = arr[i]
  arr[i] = value
}

module.exports = {
  isType,
  swap
}