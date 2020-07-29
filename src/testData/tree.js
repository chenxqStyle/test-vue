class Tree {

  constructor(root) {
    this.root = root
  }

  addNode(node, parent = this.root) {
    parent.addChild(node)
  }

  search(validator) {
    const queue = [ this.root ]

    while (queue.length > 0) {
      const currNode = queue.shift()

      if (validator(currNode)) {
        return currNode
      }

      if (currNode.children.length > 0) {
        arrayUtils.prepend(queue, ...currNode.children)
      }
    }
  }

  get size() {
    let size = 0
    const bag = [ this.root ]

    while (bag.length > 0) {
      const currNode = bag.shift()

      size++

      if (currNode.children.length > 0) {
        arrayUtils.prepend(bag, ...currNode.children)
      }
    }

    return size
  }

  get height() {
    return this.root.height
  }
  
  toString() {
    return this.root.toString()
  }
}

