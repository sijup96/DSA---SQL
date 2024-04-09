// // Merge Sort ( Divide & Conquer)
// // Space complexity = O(n)
// // Time complexity = O(nlog(n)
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
// function merge(left, right) {
//   let sortedArray = [];
//   while (left.length && right.length) {
//     if(left[0]<right[0]){
//         sortedArray.push(left.shift())
//     }else{
//         sortedArray.push(right.shift())
//     }
//   }
//   return [...sortedArray,...left,...right]
// }

// const arr = [4, 7, 8, 4, 9, 66, 11];
// console.log(mergeSort(arr));


function mergeSort(arr){
  if(arr.length<=1) return arr
  let mid=Math.floor(arr.length/2)
  let left= arr.slice(0,mid)
  let right=arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
  let sortedArray=[]
  while(left.length && right.length){
    if(left[0]<right[0]){
      sortedArray.push(left.shift())
    }else{
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray,...left,...right]
}

const arr = [3, 7, 8, 4, 9, 66, 11];
console.log(mergeSort(arr));