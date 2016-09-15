describe('Split Array function', function() {
  it('is able to split an even length array into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
  });
  it('is able to split an odd length array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
  });


});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays when lopsided left', function(){
    expect(merge([1,2,3],[4,5])).toEqual([1,2,3,4,5]);
  });
  it('is able to merge two sorted arrays when lopsided right', function(){
    expect(merge([4,5],[1,2,3])).toEqual([1,2,3,4,5]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([5,9,13],[1,2,8,20])).toEqual([1,2,5,8,9,13,20]);
  });
});
