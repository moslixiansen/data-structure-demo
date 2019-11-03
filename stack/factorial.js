const Stack = require('./index')

/**
 * 实现阶乘
 */
const factorial = function (n) {
  const stack = new Stack()
  
  while(n > 0) {
    stack.push(n--)
  }

  let res = 1
  while(stack.length() > 0) {
    res *= stack.pop()
  }

  return res
}

console.log(factorial(5)) // 120

module.exports = factorial