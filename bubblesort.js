function bubbleSort(array, comparator) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length-1-i; j++ ) {
			if ( comparator(array[j], array[j+1]) ) {
				var swap = array[j];
				array[j] = array[j+1];
				array[j+1] = swap;
			}
		}
	}
	return array;
}
