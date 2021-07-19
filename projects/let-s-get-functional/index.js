// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
//change it to lodown-csherpa after done with lodown
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

///maleCout
//I: Array
//O: Number
//C: Use Filter
var maleCount = function(array) {
    let count = 0;
    _.filter(array, (val, i, array) =>{
        if(val.gender === 'male'){
            count += 1;   
        }
    });
    return count;
};

//I: Array
//O: Number
//C: Use Reduce
var femaleCount = function(array) {
    let count = 0;
    return _.reduce(array, (memo, elem) => {
        if(elem.gender === 'female'){
            count++;
            return count;
        }
        return memo;
    }, 0);
    
};

//I: Array
//O: String
var oldestCustomer = function(array) {
    // let oldest = 0;
    return _.reduce(array, (memo, val, i) => {
      if(val.age > memo.age){
         memo = val.age;
         return val.name;
      }
      return memo;
    });
};

//I: Array
//O: String
var youngestCustomer = function(array) {
    //checks for the lowest age number
    let youngest =  Number.POSITIVE_INFINITY;
    return _.reduce(array, (memo, val, i) =>{
      if(val.age < youngest){
        youngest = val.age;
        return val.name;
      }
      return memo;
    });
};

//I: Array
//O: Number
var averageBalance = function(array) {
    let total = 0;
    return _.reduce(array, (memo, val, i) => {
      //removed $ and comma from the string
        let str = val.balance.replace(/['$',\s]/gi, '');
        //convert string to number
        let num = Number(str);
        total += num;
        return total / array.length;
    }, 0);
};

//I: Array, String(letter)
//O: Number
var firstLetterCount = function(array, string) {
    // let letterCount = 0;
    return _.reduce (array, (letterCount, val) =>{
      if(val.name[0].toUpperCase() === string.toUpperCase()){
        letterCount += 1;
        // return letterCount;
      }
      return letterCount;
    }, 0);
};

//I: Array, Object(Customer), String(letter)
//O: Number
var friendFirstLetterCount = function(array, obj, str) {
    // let count = 0; 
    return _.reduce(array, (count, val, i) => {
      if(val.name === obj){
        for(let i = 0; i< val.friends.length; i++) {
          if(val.friends[i].name[0].toUpperCase() === str.toUpperCase()){
            count += 1; 
          }
        }
      }
      return count;
    }, 0);
};


//I: Array, String(name)
//O: Array
var friendsCount = function(array, string) {
    return _.reduce (array, (memo, val, i) => {
      for(let i = 0; i < val.friends.length; i++) {
        if(val.friends[i].name === string){
          memo.push(val.name);
        }
      }
      return memo;
  }, []);
};

//I: Array
//O: Array
var topThreeTags = function(array){
    let count = {};
    _.each(array, (val, i) =>{
      _.each(val.tags, (elem,i) => {
        count[elem] = (count[elem] || 0) + 1;
      });
      
    });
    return Object.keys(count).sort( (a,b) => count[b] - count[a] ).slice(0, 3);
};

//I: Array
//O: Object
//C: Use Reduce 
var genderCount = function(array){
    let nonBinary = 0;
    return _.reduce(array, (memo, val) => {
      if(val.gender === 'non-binary'){
        nonBinary += 1;
      }
      //used the maleCount and femaleCount function as the value passed at male and female key
      memo['male'] = maleCount(array),
      memo['female'] = femaleCount(array);
      memo[`non-binary`] = nonBinary;
      return memo;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
