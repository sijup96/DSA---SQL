// Binary search

function binarySearch(arr,value){
    let start=0
    let end=arr.length-1
    while(start<end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]===value) return mid
        if(value<arr[mid]){
            end=mid-1
        }else{
            start=mid+1
        }
    }
    return 'Invalid input'
}

const arr=[1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(arr,6));