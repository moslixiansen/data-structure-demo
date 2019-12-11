class Node {
  constructor (data, left = null, right = null) {
    if (data === null) {
      throw new Error(`node's value of tree can not be null`)
    }
    this.data = data
    this.left = left
    this.right = right
  }

  show () {
    return this.data
  }
}

module.exports = Node