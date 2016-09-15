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

  var compare;
  beforeEach(function() {
    compare =  {
      func: function(a,b) {
        if (a < b) return -1; // returning `-1` means "a goes before b"
        if (a > b) return 1;  // returning  `1` means "b goes before a"
        return 0; // returning 0 means "a and b are equivalent"
      }
    };
  });

  it('is able to merge two sorted arrays when lopsided left', function(){
    expect(merge([1,2,3],[4,5], compare.func)).toEqual([1,2,3,4,5]);
  });
  it('is able to merge two sorted arrays when lopsided right', function(){
    expect(merge([4,5],[1,2,3], compare.func)).toEqual([1,2,3,4,5]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    spyOn(compare, 'func').and.callThrough();
    expect(merge([5,9,13],[1,2,8,20], compare.func)).toEqual([1,2,5,8,9,13,20]);
    //expect(compare.func).toHaveBeenCalled();
  });
  it('is able to merge two sorted arrays and one empty array into one sorted array', function(){
    expect(merge([5,9,13],[], compare.func)).toEqual([5,9,13]);
  });
});


describe('Merge Sort', function(){

  var compare;
  beforeEach(function() {
    compare =  {
      func: function(a,b) {
        if (a < b) return -1; // returning `-1` means "a goes before b"
        if (a > b) return 1;  // returning  `1` means "b goes before a"
        return 0; // returning 0 means "a and b are equivalent"
      }
    };
  });

  it('is able to sort reversed arrays', function(){
    expect(mergeSort([5,4,3,2,1], compare.func)).toEqual([1,2,3,4,5]);
  });
  it('is able to sort sorted arrays', function(){
    expect(mergeSort([1,2,3,4,5], compare.func)).toEqual([1,2,3,4,5]);
  });
  it('is able to sort empty arrays', function(){
    expect(mergeSort([], compare.func)).toEqual([]);
  });
  it('is able to sort random arrays', function(){
    expect(mergeSort([20,1,13,5,2,8,9,7], compare.func)).toEqual([1,2,5,7,8,9,13,20]);
  });
  it('is able to sort one element arrays', function(){
    expect(mergeSort([7], compare.func)).toEqual([7]);
  });
  it('is able to sort array of objects by age', function(){
    compare.func = function(a,b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    };
    expect(mergeSort([{age:5},{age:2},{age:4}], compare.func)).toEqual([{age:2},{age:4},{age:5}]);
  });
});

