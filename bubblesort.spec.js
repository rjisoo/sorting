describe('Bubble Sort', function(){

  var compareObj;
  beforeEach(function() {
    compareObj = {
      func: function(a, b) {
        return a > b;
      }
    };
    spyOn(compareObj, 'func').and.callThrough();
  });

  it('handles an empty array', function(){
    console.log(compareObj.func)
    expect( bubbleSort([], compareObj.func) ).toEqual( [] );
  });

  it('handles single item', function() {
  	expect( bubbleSort(["a"], compareObj.func) ).toEqual( ["a"] );
  });

  it('handles multiple items', function() {
  	expect( bubbleSort(["a", "d", "c", "b"], compareObj.func) ).toEqual( ["a", "b", "c", "d"] );
    expect(compareObj.func).toHaveBeenCalledTimes(6);
  });
});

