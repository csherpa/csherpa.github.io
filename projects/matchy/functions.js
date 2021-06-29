/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a funtion search with array and string parameters
 //I: Array, String
  //O: Object
function search (arr, str) {
  /*use find method to loop through the arr and check is the str 
   *passed exists in the arr.
   */
  let result = arr.find( e => e.name === str);
  if(result){
    return result;
  }
  else{
    return null;
  }
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare function replace with 3 parameters (array, string, object)
//I: One(Array, string, object)
//O: Object (replace the obj if the name already exits)
function replace (arr, str, obj) {
  // use for loop to access the arr passed
  for(let i = 0; i < arr.length; i++){
    //check if the name in the object exists, if true then replace it with new object passed.
    if(arr[i].name === str){
      return arr[i] = obj;     
    }
    return arr;
  }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare a function remove with 2 parameters(array, string);
//I: One(Array, String)
//O: Object
function remove(arr, str) {
  for(let i = 0; i < arr.length; i++){
    //check if the name exists in the array
    if(arr[i].name === str) {
      //if it exists use splice toremove the object from the array
      let result = arr.splice(str, 1);
      return result;
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare function add with 2 parameters(array, object)
//I: Array, Object
//O: Object
function add (arr, obj) {
  for(let i = 0; i < arr.length; i++){
    //check if the name exist and name and species has a length > 0
    if(arr[i].name !== obj.name && obj.name.length > 0 && obj.species.length > 0){
      //use splice method to replace the elements if name doesn't exists.
      arr.splice( arr.length, 0, obj);
      return arr;
    }
    else{
      return arr[i];
    }
  }
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
