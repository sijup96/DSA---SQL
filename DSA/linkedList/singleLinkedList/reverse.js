// Reverse the Elements of Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  insertArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }
  print() {
    if (!this.head) return "List is Empty..";
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.value} `;
      current = current.next;
    }
    return result;
  }
  reverseList() {
    let previous = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

const obList = new linkedList();

const arr = [1, 2, 3, 4, 5, 6, 7];
obList.insertArray(arr);

obList.reverseList();

console.log(obList.print());
