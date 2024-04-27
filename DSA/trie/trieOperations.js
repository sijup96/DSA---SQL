// Trie
// class Node{
//     constructor(){
//         this.children={}
//         this.isWordEnd=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insertWord(word){
//         let current=this.root
//         for(let i =0;i<word.length;i++){
//             let insertData=word[i]
//             if(!(insertData in current.children)){
//                 current.children[insertData]=new Node()
//             }
//             current=current.children[insertData]
//         }
//         current.isWordEnd=true
//     }
//     contain(word){
//         let current=this.root
//         for(let i=0;i<word.length;i++){
//             if(!(word[i] in current.children)){
//                 return false
//             }
//             current=current.children[word[i]]
//         }
//         return current.isWordEnd
//     }
//     searcchPrefix(prefix){
//         let current= this.root
//         let words=[]
//         for(let i=0;i<prefix.length;i++){
//             if(!(prefix[i] in current.children)){
//                 return words
//             }
//             current=current.children[prefix[i]]
//         }
//         this.collection(current,prefix,words)
//         return words
//     }
//     collection(current,prefix,words){
// if(current.isWordEnd){
//     words.push(prefix)
// }
// for(let child in current.children){
//     this.collection(current.children[child],prefix+child,words)
// }
//     }
// }


class Node{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node
    }
    insertWord(word){
        let current= this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in current.children )){
                current.children[word[i]]=new Node
            }
            current=current.children[word[i]]
        }
        current.isWordEnd=true
    }
    contain(word){
        let current= this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in current.children)){
                return false
            }
            current=current.children[word[i]]
        }
        return current.isWordEnd
    }
    searcchPrefix(word){
        let current= this.root
        let result=[]
        for(let i=0;i<word.length;i++){
            if(!(word[i] in current.children)){
                return result
            }
            current=current.children[word[i]]
        }
        this.collection(current,word,result)
        return result

    }
    collection(current,word,result){
if(current.isWordEnd){
    result.push(word)
}
for(let child in current.children){
    this.collection(current.children[child],word+child,result)
}
}
}


const tries=new Trie()
tries.insertWord('apple')
tries.insertWord('appledata')
tries.insertWord('appleprice')
console.log(tries.contain('apple'));
console.log(tries.searcchPrefix('apple'));