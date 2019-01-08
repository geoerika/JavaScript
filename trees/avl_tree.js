class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
        this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (key < node.key) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node (key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(
      this.getNodeHeight(node.left), this.getNodeHeight(node.right)
      ) + 1;
  }

  getBalanceFactor(node) {
     const BalanceFactor = {
      UNBALANCED_RIGHT: 1,
      SLIGTHLY_UNBALANCED_RIGHT: 2,
      BALANCED: 3,
      SLIGTHLY_UNBALANCED_LEFT: 4,
      UNBALANCED_LEFT: 5
    }
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor. SLIGTHLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGTHLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
}

const tree = new AVLTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(20);
tree.insert(13);
tree.insert(2);
tree.insert(17);
tree.insert(1);
tree.insert(19);

console.log(tree.getNodeHeight(tree.root));
console.log(tree.getBalanceFactor(tree.root));