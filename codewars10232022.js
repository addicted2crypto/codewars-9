// Title: caculate average

// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// FUNDAMENTALSARRAYS

// My Solution =>

//  function findAverage(array) {
//    return array.reduce((a, b) => a + b, 0) / array.length;
//    return 0;
//  }

findAverage = (arr) => arr.length == 0 ?  0 : arr.reduce((a, b) => a + b, 0) / arr.length, 0;