////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //first check if step is given or undefined
  if(step === undefined){
    step = 1;
  }
  //check if the step is less than 0 and if start isless than end then return [];
  if(start < end && step < 0){
    return [];
  }
  // //create an array to store all the new values
  let newArr = [];

  // ///check if start > end or start < end 
  if(start > end){
    //start a loop
    for(let i = start; i >= end; i += step){
      //console.log(i);
      newArr.push(i);
    }
  }
  else{
    if(start < end){
      //start a loop 
      for(let i = start; i <= end; i += step){
        //console.log(i)
        newArr.push(i);
      }
    }
  }
  return newArr;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  return arr.reduce((memo, val) => {
    return memo += val;
  }, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  var temp = [];

  for (var i = 0; i < Math.floor(array.length/2);i++) {
    temp[i] = array[i]; 
    // console.log(temp[i])
    array[i] = array[array.length - 1 - i]; 
    array[array.length - 1 - i] = temp[i]; 
	}
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: Array
//O: Object
function arrayToList(array) {
  return array.reduceRight((rest, value) => {
    return {value: value, rest: rest};
  }, null)
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: Object ; Default parameter arr = []
//O : Array
function listToArray(list, arr = []) {
  //base case
  if(list.rest === null){
    return list.value;
  }
  arr.push(list.value)
  return [list.value].concat(listToArray(list.rest));
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
 return {value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: list{object}, Number
//O: Number
function nth(list, num) {
///use bracket notation to access the element from the array
//use listToArray where the values are in an array and can be accessed with their index number
  return listToArray(list)[num];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  // console.log(obj1, obj2)
  if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    return true;  
  }
  else{
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
