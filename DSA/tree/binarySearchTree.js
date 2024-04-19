// BST O(log n)

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
  search(root, value) {
    if (!root) return false;
    if (root.value === value) {
      return true;
    } else {
      if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root){
if(root){
  console.log('preOrder: ',root.value);
  this.preOrder(root.left)
  this.preOrder(root.right)
}
  }
  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log('inorder',root.value);
      this.inOrder(root.right)
    }
  }
  postOrder(root){
if(root){
  this.postOrder(root.left)
  this.postOrder(root.right)
  console.log('postOrder',root.value);
}
  }
  levelOrder(){
    const queue=[]
    queue.push(this.root)
    while(queue.length){
      let curr=queue.shift()
      console.log('levelOrder:',curr.value);
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right)
      queue.push(curr.right)
    }
  }
}

const arr=[10,5,15,3,7]
const bst = new binarySearchTree();
console.log("isEmpty: ", bst.isEmpty());
for(let i=0;i<arr.length;i++){
  bst.insert(arr[i]);
}

console.log("isEmpty: ", bst.isEmpty());
console.log(bst.search(bst.root, 15));
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)
bst.levelOrder()