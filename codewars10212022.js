Title remove string spaces 

DESCRIPTION:
Simple, remove the spaces from the string, then return the resultant string.

My solution =>

function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
  }