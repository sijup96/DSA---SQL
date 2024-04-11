// Stack using Queue
class stackUsingQueue{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    push(value){
        while(this.q1.length!==0){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(value)
        while(this.q2.length!==0){
            this.q1.push(this.q2.shift())
        }
    }
    top(){
        if(this.q1.length===0) return 'Stack is empty..'
        return this.q1[0]
    }
    print(){
        if(this.q1.length===0) return 'Stack is empty..'
        let res=' '
        for(let i=0;i<this.q1.length;i++){
            res+=this.q1[i]+' '
        }
        return res.trim()
    }
}
const stack=new stackUsingQueue()
const arr=[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
    stack.push(arr[i])
}
console.log(stack.top());
console.log(stack.print());