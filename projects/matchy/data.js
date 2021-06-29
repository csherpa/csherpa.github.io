/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare an object animal
var  animal = {};

//use bracket and dot notation to add key:value pairs in animal object
animal['species'] = 'Cat';
animal['name'] = 'Sushi';
animal.noises = [];

console.log(animal); //prints => {species: 'Cat', name: 'Sushi', noises: []}

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare an array noises
var noises = [];

//bracket notation to add a string in the array
noises[0] = 'Meow';

//use push method to add value at the end of the array
noises.push('Purr');

//use unshift method to add in the front of the array
noises.unshift('Hiss');

noises.push('Snore');

// use length property to add a value at the end on an array
noises[noises.length] = 'Rarr';

console.log(noises.length); //Prints => 5

console.log(noises[noises.length - 1]); //Prints Rarr

console.log(noises); //Prints => ['Meow', 'Purr', 'Hiss', 'Snore', 'Rarr']

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Use bracket notation to add noises array to the animal object
animal['noises'] = noises;

console.log(animal);
/*
 Prints => 
 {
  species: 'Cat',
  name: 'Sushi',
  noises: [ 'Hiss', 'Meow', 'Purr', 'Snore', 'Rarr' ]
}
*/

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a variable animals and assign it with []
var animals = [];

//push method adds the animal object in the array
animals.push(animal);

console.log(animal);
/*Prints => [
   {
      species: 'Cat',
      name: 'Sushi',
      noises: [ 'Hiss', 'Meow', 'Purr', 'Snore', 'Rarr' ]
   }
  ]
*/

//declare a variable duck and give key:value pairs 
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}

//this adds duck object at the end of an animals array
animals.push(duck);

console.log(animals);

//declare variable dog
var dog = {
    species: 'canine',
    name: 'Jack',
    noises: ['woof', 'bark', 'howl']
};

animals.push(dog);

var bird = {
    species: 'bird',
    name: 'FlyNugget',
    noises: ['chirp', 'squak']
}

animals.push(bird);

console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */

///Array data structure to add friends list
//use dot notation to add key:value in bird object
bird.friends = ['Jimmy'];

var friends = [];

//declare getRandom function
//I: Array
//O; Random Index
function getRandom(array) {
    for(let i = 0; i < array.length; i++){
        return Math.floor(Math.random(i));
    }
}

console.log(getRandom(animals));

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}