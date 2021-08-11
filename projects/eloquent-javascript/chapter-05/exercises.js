// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: Multi-Array
//O: Array
//C: use reduce and concat
function flatten(array) {
  return array.reduce((memo, val) => {
    return memo.concat(val);
  }, [])
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  for(let i = val; test(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: Array, test
//O: Boolean
function every(array, test) {
  return array.every((val, i) => {
    if(test(val)){
      return true;
    }
    return false;
  });
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// the letter that is passed must be in its Unicode value
// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })) {
//       return script;
//     }
//   }
//   return null;
// }

//Items: iterable collection(string, array) with length property
//groupName: callback function
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({
//         name,
//         count: 1
//       });
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }
///////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  //countBy is the helper function helper.js file
  const arr = countBy(str, function(char) {
    //get the unicode value for the current character
    const unicode = char.charCodeAt();
    //find the script obj from the unicode character
    const script = characterScript(unicode);
    //return the name of the script direction or null
    if(script !== null){
      return script.direction;
    }
    else{
      return script;
    }
  });
  
  //find the highest count by sorting
  arr.sort((a, b) => {
    // should be sort by their count properties (highest to lowest)
    return b.count - a.count;
  });
  return arr[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
