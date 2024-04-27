// property:
// - elements are in ascending order
// - complete binary tree (node is smaller than it’s children)
// - root is the most minimum
// - insert takes O(logn) time
//     - insert to the bottom right
//     - bubble up until it meets requirements
// - extract_min takes O(logn) time
//     - replace min with bottom right
//     - bubble down until it meets requirements
class MinHeap {
  constructor() {
    this.data = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChild(i) {
    return i * 2 + 1;
  }
  getRightChild(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key) {
    this.data.push(key);
    this.heapifyUp();
  }
  heapifyUp() {
    let currentIndex = this.data.length - 1;
    while (
      currentIndex > 0 &&
      this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  pop() {
    const minValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.heapifyDown();
    return minValue;
  }
  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChild(currentIndex) < this.data.length) {
      let smallestChildIndex = this.getLeftChild(currentIndex);
      if (
        this.getRightChild(currentIndex) < this.data.length &&
        this.data[this.getRightChild(currentIndex)] <
          this.data[smallestChildIndex]
      ) {
        smallestChildIndex = this.getRightChild(currentIndex);
      }
      if (this.data[currentIndex] > this.data[smallestChildIndex]) {
        this.swap(currentIndex,smallestChildIndex)
        currentIndex = smallestChildIndex;
      } else {
        return;
      }
    }
  }
  poll(){
    const minValue=this.data[0]
    this.data[0]=this.data[this.data.length-1]
    this.data.length--
    this.heapifyDown()
    return minValue
  }
}
const minHeap = new MinHeap();
const arr = [3, 23, 21, 13, 223, 221];
for (let i = 0; i < arr.length; i++) {
  minHeap.push(arr[i]);
}
console.log(minHeap.data);
minHeap.pop();
console.log(minHeap.data);
console.log(minHeap.poll());// same as pop()
console.log(minHeap.data);
