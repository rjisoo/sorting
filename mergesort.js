function split(wholeArray) {
  return [wholeArray.slice(0,Math.ceil(wholeArray.length/2)),
          wholeArray.slice(Math.ceil(wholeArray.length/2), wholeArray.length)];
}

function merge(leftArr, rightArr) {
  var mergedArr = [];
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] < rightArr[0])
      mergedArr.push(leftArr.shift());
    else
      mergedArr.push(rightArr.shift());
  }
  return !leftArr.length ? mergedArr.concat(rightArr) : mergedArr.concat(leftArr);
}

// function mergeSort(array) {
// 	if (array.length > 1) {
// 		var splitArr = split(array);
// 		return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1])); 
// 	} else {
// 		return array;
// 	}
// }


function mergeSort(array) {
	var splitArr = split(array);
	return array.length > 1 ? merge(mergeSort(splitArr[0]), mergeSort(splitArr[1])) : array;
}