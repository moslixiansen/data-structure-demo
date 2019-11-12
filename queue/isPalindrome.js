const util = require('../util')
const DoubleQueue = require('./doubleQueue')

const isPalindrome = function (word) {
  if (!util.isType(word)('String')) {
    throw new Error('the input param must be string!')
  }
  const len = word.length
  const doubleQueue = new DoubleQueue()

  for (let i = 0; i < len; i++) {
    doubleQueue.enqueue(word[i])
  }
  let newWord = ''
  while (doubleQueue.length()) {
    newWord += doubleQueue.dequeueEnd()
  }

  return newWord === word
}

console.log(isPalindrome('abjkkjba'))