const util = require('../util')

const sort = function (arr, callback) {
  if (!util.isType(arr)('Array')) {
    throw new Error('the first param must be array!')
  }
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      callback(arr[j], arr[j+1]) && util.swap(arr, j, j+1)
    }
  }
}

module.exports = sort