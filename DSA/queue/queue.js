// Queue

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is empty..";
    return this.queue.shift();
  }
  peek() {
    if (this.isEmpty()) return "Queue is empty..";
    return this.queue[0];
  }
  print() {
    if (this.isEmpty()) return "Queue is empty..";
    return this.queue;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
const queue = new Queue();
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  queue.enqueue(arr[i]);
}
queue.dequeue();
console.log(queue.peek());
console.log(queue.print());
