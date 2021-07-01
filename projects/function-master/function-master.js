//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: Object
//O: Array
function objectValues(object) {
    let objArr = [];
    for(let key in object) {
      objArr.push(object[key]);
    }
    return objArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: Object
//O: String
function keysToString(object) {
    let newArr = [];
    for(let key in object) {
        //push method add at the end of an array
        newArr.push(key);
    }
    //join convert an array into a string
    return newArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: Object
//O: String
function valuesToString(object) {
    let arr = [];
    for(let key in object) {
        //object[key] access the values of the object
        if(typeof object[key] === 'string'){
            arr.push(object[key]);
        }
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: collection {Array or Object}
//O: String 'array' or 'object'
function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    }
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string
//O: string[0] capitalized 
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I : Stiring
//O: String(capitalizedAll)
function capitalizeAllWords(string) {
    let arr = string.split(' ');
    for(let i = 0; i < arr.length; i++){
      //reassigning the new string to the arr[i] 
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
      
    }
    return arr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: Object
//O: String
function welcomeMessage(object) {
    for(let key in object) {
        return "Welcome " +  object['name'][0].toUpperCase() + object['name'].slice(1) + '!';  
  }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object 
//O: string
function profileInfo(object) {
    for(let key in object) {
        //use bracket notation to access name: values and substring 
        let name =  object['name'][0].toUpperCase() + object['name'].substring(1) ;  
        //Use dot notation and slice method
        let species = object.species[0].toUpperCase() + object.species.slice(1);
        return `${name} is a ${species}`;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Object
//O: String
function maybeNoises(object) {
    if( object.noises === undefined  || object.noises.length === 0 ) {
        return 'there are no noises';
    }
    return object.noises.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: 2 String
//O: Boolean 
function hasWord(string, word) {
    let arr = string.split(' ');
      if(arr.indexOf(word) !== -1){
        return true;
      }
      else{
        return false;
      }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: Object, String
//O: Object
function addFriend (name, object) {
    for(let key in object){
      object[key].push(name)     
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: String, Object
//O: Boolean
function isFriend(name, object) {
    if(object.friends === undefined || object.friends.indexOf(name) === - 1) {
        return false;
    }
    return true;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string , array
//O: Array
function nonFriends(name, array) {
    let notMyFriends = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].name !== name && array[i].friends.indexOf(name) === -1){
            notMyFriends.push(array[i].name);
        }  
    }
    return notMyFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Object, key, value
//O: Object
function updateObject(object, key, value) {
    //reassiging object[key] with new value
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Object, Array
//O: Object
function removeProperties(object, array) {
    for(let i = 0; i < array.length; i++){
        delete object[array[i]];
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I : Array
//O: Array
function dedup(array) { 
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    }
      return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}