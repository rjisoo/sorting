describe('Split Array function', function() {
  it('is able to split an even length array into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
  });
  it('is able to split an odd length array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
  });
  it('is able to split an 1 length array into two halves', function() {
    expect(split([1])).toEqual([[1],[]]);
  });

});

describe('Merge', function(){
  it('is able to merge two sorted arrays when lopsided left', function(){
    expect(merge([1,2,3],[4,5])).toEqual([1,2,3,4,5]);
  });
  it('is able to merge two sorted arrays when lopsided right', function(){
    expect(merge([4,5],[1,2,3])).toEqual([1,2,3,4,5]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([5,9,13],[1,2,8,20])).toEqual([1,2,5,8,9,13,20]);
  });
  it('is able to merge two sorted arrays and one empty array into one sorted array', function(){
    expect(merge([5,9,13],[])).toEqual([5,9,13]);
  });
});


describe('Merge Sort', function(){
  it('is able to sort reversed arrays', function(){
    expect(mergeSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
  });
  it('is able to sort sorted arrays', function(){
    expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
  it('is able to sort empty arrays', function(){
    expect(mergeSort([])).toEqual([]);
  });
  it('is able to sort random arrays', function(){
    expect(mergeSort([20,1,13,5,2,8,9,7])).toEqual([1,2,5,7,8,9,13,20]);
  });
  it('is able to sort one element arrays', function(){
    expect(mergeSort([7])).toEqual([7]);
  });
});

