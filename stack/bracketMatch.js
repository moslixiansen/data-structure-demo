const Stack = require('./index')

/**
 * 栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算
 * 术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例
 * 子：2.3+23/12+(3.14159×0.24。
 */
const bracketMatch= function (str) {
  const stack = new Stack()
  for (let i = 0; i<str.length; i++) {
    str[i] === '(' && stack.push(i)
    if (str[i] === ')') {
      const match = stack.pop()

      if (match === undefined) {
        // 缺少左括号, 直接返该右括号位置
        return `${str} is not matched, and the not matched positions of ')' is ${i}`
      }
    }
  }
  if (stack.length() === 0) {
    return `${str} is matched`
  }
  let leftPosition = ''
  while (stack.length() > 0) {
    // 缺少右括号, 返回对应左括号的位置
    leftPosition = ` ${stack.pop()}`.concat(leftPosition)
  }
  return `${str} is not matched, and the not matched positions of '(' is ${leftPosition}`
}

console.log(bracketMatch('12.3+23/12)+(3.141(59×0.24)'))

