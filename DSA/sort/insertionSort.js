// insertion Sort
function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let previousIndex = i - 1;
    while (previousIndex >= 0 && arr[previousIndex] > currentValue) {
      arr[previousIndex + 1] = arr[previousIndex];
      previousIndex--;
    }
    arr[previousIndex + 1] = currentValue;
  }
  return arr;
}

const arr = [22, 55, 11, 3, 88, 4, 3, 9, 10];
console.log(insertionSort(arr));
