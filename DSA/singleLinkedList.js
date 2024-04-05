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
  print(){
    if(!this.head){
        return 'List is Empty..'
    }else{
        let current=this.head
        let result=''
        while(current){
            result+=`${current.value} `
            current=current.next
        }
        return result
    }
  }
  // Insert element to first (prepend)
  prepend(value) {
    const node = new Node(value);
    if(!this.head){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
  }
}

const obList=new linkedList()
obList.prepend(10)
obList.prepend(20)
console.log(obList.print());