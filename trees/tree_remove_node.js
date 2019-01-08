class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
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
        node.right = new Node (key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {

    if (node === null) {
      return null;
    }

    if(node.key > key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (node.key < key) {
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null & node.right === null) {
          node = null;
          return node;
        }
        if(node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        const aux = this.minNode(node.right);
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
        return node;
      }
  }

  minNode(node) {
    let current = node;
    if (node.left != null) {
      current = node.left;
      return this.minNode(node.left);
    }
    return current;
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null ) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

}

const tree = new BinarySearchTree();
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

const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);
tree.remove(9);
tree.inOrderTraverse(printNode);