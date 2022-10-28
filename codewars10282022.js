// Title exes and ohs.

// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// FUNDAMENTALS


// My solution =>

function XO(str) {
    let xcnt = 0;
  let ocnt = 0;
  for (let i = 0; i < str.length; i++){
    let letters = str[i];
    if (letters === 'x' || letters === 'X'){
      xcnt++;
    }else if(letters === 'o' || letters === 'O'){
      ocnt ++;
    }
  }
  return ocnt === xcnt;
  }