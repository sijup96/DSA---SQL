// Queue using stack
let queueUsingStack=function(){
    this.stack1=[]
    this.stack2=[]
}
queueUsingStack.prototype.enQueue=function(x){
this.stack1.push(x)
}
queueUsingStack.prototype.deQueue=function(){
if(this.stack2.length===0){
    while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
    }
}
return this.stack2.pop()
}
queueUsingStack.prototype.front=function(){
    if(this.stack2.length!==0){
        return this.stack2[this.stack2.length-1]
    }else{
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2[this.stack2.length-1]
    }
    }
queueUsingStack.prototype.print=function(){
let str=''
if(this.stack2.length){
  for(i=this.stack2.length-1;i>=0;i--){
    str+=this.stack2[i]+' '
  }
  if(this.stack1.length){
    for(i=0;i<this.stack1.length;i++){
        str+=this.stack1[i]+' '
    }
  }
}
return str
}


const queue=new queueUsingStack()
const arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    queue.enQueue(arr[i]) 
}
console.log(queue.deQueue());

queue.enQueue(6) 

console.log(queue.print());
console.log(queue.front());