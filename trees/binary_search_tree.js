class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.rigth = null;
  }
}

class BinarySearchTree {
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
        node.rigth - new Node (key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
console.log(tree);