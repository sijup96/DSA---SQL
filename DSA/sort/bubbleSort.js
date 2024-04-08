// Bubble sort ( O(n^2) )
function bubbleSort(arr){
    let swaped
do{
    swaped=false
    for(i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swaped=true
        } 
    }
}while(swaped)
return arr
}

const arr=[6,5,7,3,8,3,0,22]
console.log(bubbleSort(arr));