class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.isEmpty()) return "Stack ios empty..";
    return this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
  peek() {
    if (this.isEmpty()) return "Stack ios empty..";
    return this.stack[this.size() - 1];
  }
  print() {
    if (this.size() === 0) return "Stack is empty..";
    return this.stack;
  }
}
const arr = [10, 20, 30, 40, 50];
const stack = new Stack();
for (i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
}
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.print());
