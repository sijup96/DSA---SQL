// Selection Sort
function selectionSort(array){
    let min
for(i=0;i<array.length-1;i++){
    min=i
    for(j=i+1;j<array.length;j++){
        if(array[min]>array[j]){
            min=j
        }
    }
    let temp=arr[min]
    arr[min]=arr[i]
    arr[i]=temp
}
    return array
}

const arr=[6,5,7,3,8,10,0,22]
console.log(selectionSort(arr));