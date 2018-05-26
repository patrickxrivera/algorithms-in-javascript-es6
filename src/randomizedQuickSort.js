// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-mixed-operators */

const getRandBetween = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot];
  let partitionIdx = left;

  [arr[pivot], arr[right]] = [arr[right], arr[pivot]];

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[partitionIdx]] = [arr[partitionIdx], arr[i]];
      partitionIdx++;
    }
  }

  [arr[partitionIdx], arr[right]] = [arr[right], arr[partitionIdx]];

  return partitionIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivot = getRandBetween(left, right);

    const partitionIdx = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, right);
  }

  return arr;
};

module.exports = quickSort;
