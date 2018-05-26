/* eslint-disable no-undef */

const mergeSort = require('../src/mergeSort');

describe('MergeSort', () => {
  it('should return a sorted array', () => {
    const arr = [1, 3, 2, 4, 6, 3, 12, 11];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 3, 4, 6, 11, 12]);
  });
});
