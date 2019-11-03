const Stack = require('./index')

/**
 * 判断是否为回文数字
 */
const isPalindrome = function (str) {
  const stack = new Stack()
  const len = str.length
  for (let i = 0; i < len; i++) {
    stack.push(str[i])
  }
  let reverseStr = ''
  while(stack.length() > 0) {
    reverseStr += stack.pop()
  }

  return str === reverseStr
}

console.log(isPalindrome('level')) // true

module.exports = isPalindrome