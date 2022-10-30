// Title => pick a set of first elements.

// DESCRIPTION:
// Write a function to get the first element(s) of a sequence.
//  Passing a parameter n (default=1) will return the first n element(s)
//   of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// My solution =>

// first = (arr, n =1 ) => arr.slice(0,n);

first = (arr, n) => n == undefined ? arr.slice(0, 1) : arr.slice(0, n)