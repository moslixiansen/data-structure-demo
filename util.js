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


const object = function (baseObj) {
  function F () {}
  F.prototype = baseObj
  return new F()
}

const inheritPrototype = function (SubType, SuperType) {
  const prototype = object(SuperType.prototype)
  prototype.constructor = SubType
  SubType.prototype = prototype
}

const curry = function (fn) {
  const outerArgs = Array.prototype.slice.call(arguments, 1)
  return function () {
    const innerArgs = Array.prototype.slice.call(arguments)
    const args = innerArgs.concat(outerArgs)
    return fn.apply(null, args)
  }
}

module.exports = {
  isType,
  swap,
  object,
  inheritPrototype,
  curry,
}