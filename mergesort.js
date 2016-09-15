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

function mergeSort(array) {

  /* your code here */

}
