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
  // Get size
  getSize() {
    if (!this.head) return 0;
    let current = this.head;
    let i = 1;
    while (current.next) {
      i++;
      current = current.next;
    }
    return i;
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
    while (this.head.value === value) {
      this.head = this.head.next;
    }
    let prev = this.head;
    let current = this.head.next;
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
      } else {
        prev = prev.next;
      }
      current = current.next;
    }
  }
  // Insert value by position
  insertToPosition(value, position) {
    const node = new Node(value);
    // Check for invalid position
    if (position < 0 || position > this.getSize()) {
      console.log("Enter valid Input..");
      return;
    }
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return this;
  }
  searchByValue(value) {
    let current = this.head;
    let result = [];
    for (let i = 0; i < this.getSize(); i++) {
      if (current.value === value) {
        result.push(i);
      }
      current = current.next;
    }
    if (result.length > 0) {
      return result;
    } else {
      return "Value not found..";
    }
  }
  searchByIndex(index) {
    if(index<0 || index > this.getSize()) return 'Invalid Index..'
    let current = this.head;
    for (let i = 0; i < this.getSize(); i++) {
      if (i === index) {
        return current.value
      }
      current = current.next;
    }
      return "Value not found..";
    
  }
}
// Input operations
const obList = new linkedList();

// Add to first
obList.prepend(20);
obList.prepend(20);

// Add to end
obList.append(20);
obList.append(30);
obList.append(40);

// Insert into position
obList.insertToPosition(25, 5);

// Remove;
obList.remove(20)

console.log(obList.searchByValue(20));
console.log(obList.searchByIndex(1));

console.log("size: ", obList.getSize());
console.log("Elements: ", obList.print());
