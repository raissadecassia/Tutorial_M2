const findDuplicates = require('./findDuplicates');

test('finds duplicate numbers in an array', () => {
  expect(findDuplicates([1, 2, 3, 2, 4, 3, 5, 6, 5])).toEqual([2, 3, 5]);
});

test('returns an empty array when no duplicates are found', () => {
  expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
});

test('handles negative numbers and zeros', () => {
  expect(findDuplicates([-1, 0, 2, 3, 0, -1, 4, 5, 2])).toEqual([-1, 0, 2]);
});

test('handles an empty array', () => {
  expect(findDuplicates([])).toEqual([]);
});