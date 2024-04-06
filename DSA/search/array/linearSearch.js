// Linear Search (Array)

function linearSearchByValue(arr,value){
    for(i=0;i<arr.length;i++){
    if(arr[i]===value) return i
    }
    return "Not found"
}

const arr=[2,3,8,6,4,1,67,55]
console.log(linearSearchByValue(arr,6));