const util = require('../util')

/**
 * n 的阶乘
 */
const tailFactorial = function (n, total) {
  if (n === 1) {
    return total
  }
  return tailFactorial(n-1, n * total)
}

const factorial1 =  function (n) {
  return tailFactorial(n ,1)
}

const factorial2 = util.curry(tailFactorial, 1)

console.log(factorial1(4))
console.log(factorial2(4))

/**
 * 斐波那契数列的尾递归优化
 */
const tailFibonacci = function (n, acc1 = 1, acc2 = 1) {
  if (n < 2) {
    return acc2
  }
  return tailFibonacci(n-1, acc2, acc1 + acc2)
}

const fibonacci1  = function (n) {
  return tailFibonacci(n, 1, 1)
}

/**
 * 柯里化
 */
const fibonacci2 = util.curry(tailFibonacci, 1, 1)

console.log(fibonacci1(5))
console.log(fibonacci2(5))

