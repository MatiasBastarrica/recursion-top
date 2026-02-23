function mergeSort(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }

  let halfIndex = Math.ceil(arr.length / 2);

  let leftHalf = arr.slice(0, halfIndex);
  let rightHalf = arr.slice(halfIndex);

  if (leftHalf.length > 1) {
    leftHalf = mergeSort(leftHalf);
  }
  if (rightHalf.length > 1) {
    rightHalf = mergeSort(rightHalf);
  }

  let newArr = [];

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] <= rightHalf[0]) {
      newArr.push(leftHalf.shift());
    } else {
      newArr.push(rightHalf.shift());
    }
  }

  if (!rightHalf.length) {
    newArr = newArr.concat(leftHalf);
  } else if (!leftHalf.length) {
    newArr = newArr.concat(rightHalf);
  }

  return newArr;
}
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
