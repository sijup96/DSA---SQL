// CLOSEST ELEMENT BY VALUE
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
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
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  findClosestElement(node, value) {
    if (node === null) return null;
    let closestElement;
    let minDifference = Infinity;
    while (node !== null) {
      let currentDifference = Math.abs(node.value - value);
      if (currentDifference < minDifference) {
        minDifference = currentDifference;
        closestElement = node;
      }
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        break;
      }
    }
    return closestElement.value;
  }
}
const bst = new binarySearchTree();
console.log(bst.isEmpty());

const arr = [8, 15, 6, 2, 7, 20, 5, 12];
for (let i = 0; i < arr.length; i++) {
  bst.insert(arr[i]);
}
console.log(bst.isEmpty());
console.log(bst.findClosestElement(bst.root, 10));
