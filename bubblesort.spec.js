describe('Bubble Sort', function(){
	var compare = function(a, b) {
		return a > b;
	}

  it('handles an empty array', function(){
    expect( bubbleSort([], compare) ).toEqual( [] );
  });

  it('handles single item', function() {
  	expect( bubbleSort(["a"], compare) ).toEqual( ["a"] );
  });

  it('handles multiple items', function() {
  	expect( bubbleSort(["a", "d", "c", "b"], compare) ).toEqual( ["a", "b", "c", "d"] );
  });



});




xdescribe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( recursiveBubbleSort([]) ).toEqual( [] );
  });

  it('handles single item', function() {
  	expect( recursiveBubbleSort(["a"]) ).toEqual( ["a"] );
  });

  it('handles multiple items', function() {
  	expect( recursiveBubbleSort(["a", "d", "c", "b"]) ).toEqual( ["a", "b", "c", "d"] );
  });
});