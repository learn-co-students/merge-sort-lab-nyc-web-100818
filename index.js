function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function findMinAndRemove(array1, array2) {
  if (array1[0] < array2[0]) {
    return array1.shift(); // return the first value and shorten the array
  } else {
    return array2.shift();
  }
}

function merge(array1, array2) {
  let merged = [];
  while (array1.length && array2.length) {
    merged.push(findMinAndRemove(array1, array2));
  }
  return [...merged, ...array1, ...array2];
}

function mergeSort(array) {
  if (array.length > 1) {
    let mid = array.length / 2;
    let array1 = array.slice(0, mid);
    let array2 = array.slice(mid);
    return merge(mergeSort(array1), mergeSort(array2));
  } else {
    return array;
  }
}
