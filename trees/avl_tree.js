const BalanceFactor = {
      UNBALANCED_RIGHT: 1,
      SLIGTHLY_UNBALANCED_RIGHT: 2,
      BALANCED: 3,
      SLIGTHLY_UNBALANCED_LEFT: 4,
      UNBALANCED_LEFT: 5
    }

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

  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(
      this.getNodeHeight(node.left), this.getNodeHeight(node.right)
      ) + 1;
  }

  getBalanceFactor(node) {

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

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if(key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; //duplicated key
    }

    //balance tree if needed
    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (key < node.left.key) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.SLIGTHLY_UNBALANCED_RIGHT) {
      if (key > node.right.key) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

}

const tree = new AVLTree();
tree.insert(11);
tree.insert(6);
tree.insert(4);
tree.insert(8);
tree.insert(15);



console.log(tree.getNodeHeight(tree.root));
console.log(tree.getBalanceFactor(tree.root));
console.log(tree);