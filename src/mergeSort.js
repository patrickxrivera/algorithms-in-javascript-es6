// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-continue */

const merge = (left, right) => {
  const sorted = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      sorted.push(left[leftIdx]);
      leftIdx++;
      continue;
    }

    sorted.push(right[rightIdx]);
    rightIdx++;
  }

  return [...sorted, ...left.slice(leftIdx), ...right.slice(rightIdx)];
};

const mergeSort = (arr) => {
  const len = arr.length;

  if (len < 2) return arr;

  const midpoint = Math.floor(len / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const merged = merge(sortedLeft, sortedRight);

  return merged;
};

module.exports = mergeSort;
