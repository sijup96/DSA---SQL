// Quick Sort  Divide & Conquer
// Space complexity = O(n)
// Time complexity = Average case: O(n , log n) Worst case: O(n^2)

function quickSort(arr){
    if(arr.length<2) return arr
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


const arr=[8,30,-2,5,-7]
console.log(quickSort(arr));