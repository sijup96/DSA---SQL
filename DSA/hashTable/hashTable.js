//Hash table

class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key,value){
    const index=this.hash(key)
    this.table[index]=value
  }
  get(key){
    const index=this.hash(key)
    return this.table[index]
  }
  remove(key){
    const index=this.hash(key)
    if(this.table[index]){
        this.table[index]=undefined
    }
  }
  display(){
    let arr=''
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            arr+= this.table[i]+' '
        }
    }
    return arr
  }
}

const table=new hashTable(10)
table.set('name','siju')
table.set('age',28)
table.remove('name')
console.log(table.display());