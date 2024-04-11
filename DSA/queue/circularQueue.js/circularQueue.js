// Circular Queue

let circularQueue=function(size){
    this.queue=[]
    this.size=size
}
circularQueue.prototype.enQueue=function(value){
    if(this.size===this.queue.length) return 'Queue is full..'
    this.queue.push(value)
}
circularQueue.prototype.deQueue=function(){
    if(this.queue.length===0) return 'Queue is Empty..'
    return this.queue.shift()
}
circularQueue.prototype.front=function(){
    if(this.queue.length===0) return 'Queue is Empty..'
    return this.queue[0]
}
circularQueue.prototype.rear=function(){
    if(this.queue.length===0) return 'Queue is Empty..'
    return this.queue[this.size-1]
}
circularQueue.prototype.print=function(){
    if(this.queue.length===0) return 'Queue is Empty..'
    let str=' '
    for(let i=0;i<this.size;i++){
        str+=this.queue[i] +' '
    }
    return str
}
circularQueue.prototype.isEmpty=function(){
   return this.queue.length===0
}
circularQueue.prototype.isFull=function(){
    return this.queue.length===this.size
 }
const queue=new circularQueue(5)
const arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
console.log(queue.enQueue(arr[i]))
}
// queue.deQueue()

console.log(queue.print());
console.log(queue.isFull());
console.log(queue.rear());
console.log(queue.front());