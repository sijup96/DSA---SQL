// Initialize
// Add element in front and end (prepend, append)
// Insert
// Remove
class Node {
  constructor(value) {
    this.value = value;
    this.next = this.next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
  // Print the List
  print() {
    if (!this.head) {
      return "List is Empty..";
    } else {
      let current = this.head;
      let result = "";
      while (current) {
        result += `${current.value} `;
        current = current.next;
      }
      return result;
    }
  }
  // Insert element to first (prepend)
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  // Insert element in the end
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
  // Remove all by value
  remove(value) {
    if (!this.head) return "List is Empty..";
    while(this.head.value===value){
      this.head=this.head.next
    }
    let prev=this.head
    let current=this.head.next
 while(current){
  if(current.value===value){
    prev.next=current.next
  }else{
    prev=prev.next
  }
  current=current.next
 }
  }
}
//Input operation
const obList = new linkedList();
obList.prepend(10);
obList.prepend(20);
obList.prepend(20);
obList.append(20);
obList.append(30);
obList.append(40);
obList.remove(20)
console.log(obList.print());
