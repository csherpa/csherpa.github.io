////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: 2 Number datatypes
//O: Number (mininum number)
function min(num1, num2) {
  //use Math.min() method to return the minimum value passed
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: Number
//O: Boolean
function isEven(num) {
  if(num === 0){
    return true;
  }
  else if(num === 1 || num < 0){
    return false;
  }
  return isEven(num - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// //I: String, Character
// //O: Number
function countChars(str, char) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === char){
      count += 1;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I : String
//O : Number
function countBs(str) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
   if(str.charAt(i) === 'B'){
     count += 1;
   }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
