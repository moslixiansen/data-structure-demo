const Node = require('./node')

/**
 * 二叉查找树: 任意一个节点的值大于或等于其左节点小于或等于其右节点
 */
class BST {
  constructor (root = null) {
    if (!root instanceof Node) {
      throw new Error(`root node must be instanceof Node`)
    }
    this.root = root
    this.result = []
  }

  insert (data) {
    const node = new Node(data)
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      while (true) {
        if (current.data < data) {
          if (current.right === null) {
            current.right = node
            break
          }
          current = current.right
        } else {
          if (current.left === null) {
            current.left = node
            break
          }
          current = current.left
        }
      }
    }
  }

  // 中序遍历, 结果为一个递增序列  左子树 -> 根节点 -> 右子树
  inOrder (node = this.root) {
    node.left && this.inOrder(node.left)
    this.result.push(node.show())
    node.right && this.inOrder(node.right)
  }

  // 先序遍历, 根节点 -> 左子树 -> 右子树
  preOrder (node = this.root) {
    this.result.push(node.show())
    node.left && this.preOrder(node.left)
    node.right && this.preOrder(node.right)
  }

  // 后序遍历, 左子树 -> 右子树 -> 根节点
  postOrder (node = this.root) {
    node.left && this.postOrder(node.left)
    node.right && this.postOrder(node.right)
    this.result.push(node.show())
  }

  reset () {
    this.result = []
  }

  print () {
    console.log(this.result.join(' -> '))
  }

  getMin () {
    let node = this.root
    while (node.left) {
      node = node.left
    }

    return node.show()
  }

  getMax () {
    let node = this.root
    while (node.right) {
      node = node.right
    }

    return node.show()
  }

  hasValue (data) {
    const node = this.root
    while (node !== null) {
      if (node.show() === data) {
        return true
      } else if (node.show() > data) {
        node = node.left
      } else {
        node = node.right
      }
    }
    return false
  }
}
const b = new BST()
b.insert(5)
b.insert(56)
b.insert(9)
b.insert(44)
b.insert(10)
b.insert(9)
b.insert(17)
b.insert(5)
b.insert(43)
b.insert(29)
console.log(JSON.stringify(b))

b.inOrder()
b.print()
b.reset()

b.preOrder()
b.print()
b.reset()

b.postOrder()
b.print()
b.reset()


console.log(b.getMax())
console.log(b.getMin())
