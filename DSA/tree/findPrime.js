const { log } = require("console");

// find Prime
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertValue(this.root, newNode);
    }
  }
  insertValue(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertValue(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertValue(root.right, newNode);
      }
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  findPrime(root) {
    if (root) {
      let flag = true;
      for (let i = 2; i < root.value; i++) {
        if (root.value % i === 0) {
          flag = false;
        }
      }
      if (flag) {
        console.log(root.value);
      }
      this.findPrime(root.left);
      this.findPrime(root.right);
    }
  }
}
const bst = new Tree();
const data = [10, 5, 15, 3, 7, 1, 2, 4];
for (let i = 0; i < data.length; i++) {
  bst.insert(data[i]);
}
bst.findPrime(bst.root);
