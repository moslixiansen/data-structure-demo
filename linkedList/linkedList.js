const Node = require('./node')


const LList = function (node) {
  this.head = node
}

LList.prototype.find = function (element) {
  let current = this.head
  while (current.element !== element && current.next) {
    current = current.next
  }

  return current.element === element ? current : -1
}

LList.prototype.findBefore = function (element) {
  let current = this.head
  if (current.element === element) {
    return 0
  }
  if (!current.next) {
    throw new Error('this queue has only one element!')
  }
  while(current.next.element !== element && current.next.next) {
    current = current.next
  }

  return current.next.element === element ? current : -1
}

LList.prototype.insert = function (insertNode, element) {
  if (!(insertNode instanceof Node)) {
    throw new Error('the insertNode must be an instance of Node')
  }
  const current = this.find(element)
  if (current === -1) {
    throw new Error(`can not find ${element} in current linkedList!`)
  }

  insertNode.next = current.next
  current.next = insertNode
}

LList.prototype.remove = function (element) {
  const before = this.findBefore(element)
  if (before === 0) {
    this.head = this.head.next
    return
  }
  if (before === -1) {
    throw new Error(`can not find ${element} in current linkedList!`)
  }
  before.next = before.next.next
}

LList.prototype.display = function () {
  const all = []
  let current = this.head
  all.push(current.element)
  while(current.next) {
    current = current.next
    all.push(current.element)
  }

  return console.log(all)
}

// test case
// const ll = new LList(new Node('head', null))
// ll.display()
// ll.insert(new Node(1, null), 'head')
// ll.insert(new Node(2, null), 1)
// ll.insert(new Node(3, null), 2)
// ll.display()
// ll.insert(new Node(6, null), 'head')
// ll.display()
// ll.insert(new Node(6, null), 6)
// ll.display()
// ll.insert(new Node(9, null), 6)
// ll.display()
// ll.remove(1)
// ll.display()
// ll.remove('head')
// ll.display()
// console.log(ll.head)

module.exports = LList
