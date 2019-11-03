const Stack = require('./index')

/**
 * 利用 Stack 实现进制转换 2-9
 */
const mulBase = function (num, base) {
  const stack = new Stack()

  do {
    stack.push(num % base)
    num = Math.floor(num / base)
  } while (num > 0)

  let res = ''
  while (stack.length() > 0) {
    res += stack.pop()
  }

  return Number(res)
}

console.log(mulBase(5, 2))  // 101

module.exports = mulBase