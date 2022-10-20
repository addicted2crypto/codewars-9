// Title: Sum of diffrences in array.
// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array 
// in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be
//  0 (Nothing in Haskell, None in Rust).

// My solution =>

sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// the largest number in the first array minus the smallest number in the second array
// alt solution
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}