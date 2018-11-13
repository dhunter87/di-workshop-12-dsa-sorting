function bubbleSort(a) {
    var swapped;
    do {
    	swapped = false;
    	for (var i=0; i < a.length-1; i++) {
        	if (a[i] > a[i+1]) {
            	var temp = a[i];
            	a[i] = a[i+1];
            	a[i+1] = temp;
            	swapped = true;
        	}
    	}
    } while (swapped);
}
function insertionSort(array) {
    for(var i = 0; i < array.length; i++) {
      var temp = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
    }
    return array;
  }

  function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
     return a - b;
     } 
    var min = 0;
    var index = 0;
    var temp = 0;
  
   //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;
  
    for (var i = 0; i < arr.length; i += 1) {
      index = i;
      min = arr[i];
  
      for (var j = i + 1; j < arr.length; j += 1) {
        if (compare_Function(min, arr[j]) > 0) {
          min = arr[j];
          index = j;
        }
      }
  
      temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
  
    //return sorted arr
    return arr;
  }
  




function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var ary = [1000]


for(var i = 0; i <= 10000; i++){
    ary.push(getRandomInt(10000))
}

let timeStart = Date.now();
// bubbleSort(ary);
Selection_Sort(ary);
// insertionSort(ary);
let timeEnd = Date.now();
let timeTaken = Date.now() - timeStart;
console.log(ary,'Time started : '+ timeStart+ ' Time ended : '+ timeEnd +  ' Time taken : ' + timeTaken + ' miliseconds.');
