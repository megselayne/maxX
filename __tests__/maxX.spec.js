const maxX = require('../maxXNums');

test('function maxX exists', () => {
    expect(typeof maxX).toEqual('function');
})
test('Output should be an array (object in js)', () => {
    expect(typeof maxX([10,20,11,5,9,1,3,50], 4)).toEqual('object');
})
test('Find max X nums in an array', () => {
    expect(maxX([10,20,11,5,9,1,3,50], 4)).toEqual([ 50, 20, 11, 10 ]);
})
test('X greater than or equal to array length returns array', () => {
    expect(maxX([10,20,11,5,9,1,3,50], 8)).toEqual([10,20,11,5,9,1,3,50]);
})
test('Empty array should return empty array', () => {
    expect(maxX([])).toEqual([]);
})
