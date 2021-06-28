/*
 * LOOPS:
 *
 * 0. Loops is a programming tool of JavaScript that allows us to execute a block of code 
 * as many times as needed until a specified condition called a stopping condition is reached.
 * The basic idea behind a loop is to automate the repetitive tasks within a program to save
 * time and effort. There are three different types of loops:
 * - While loops
 * - For loops
 * - For-in loops
 *
 * 1. While loops
 * The while loop loops through a block of code as long as the specified condition evaluates true.
 * When the condition fails, the loop is stopped.
 * Be sure to break out of the while loop!! Failing to do so will cause an infinite loop.
 *
 * SYNTAX : while(condition) {
 *              // code to be executed
 *          }
 *
 * 2. For loops
 * The for loop repeats a block a code as long as a certain condition is met. It is used to 
 * execute a block of code for certain number of times.For loop is great for iteration/looping over Arrays.
 *          
 * SYNTAX : for(initialization, condition; increment) {
 *              // Code to repeat on each loop
 *          }
 * A for loop is defined using three statements
 * - Initialization/Start : The condition set to tell your loop where to begin.
 * - Condition/Stop : The condition set to tell when the loop will stop. Repeat while the 
 *                    is true, stop when the condition is false.
 * - Increment/Update : How much we will move per iteration. Increase or decrease the counting variable.
 *
 * 3. For-in loops
 * The for-in loop is a special type of a loop that iterates over the properties of an object.
 * For-in loops pulls out all the keys of an Object and the keys of an object gives us the value of it.
 * 
 * The variable key in the for-in loop is a string. 
 *
 * SYNTAX : for(var key in object) {
 *             // code to be executed
 *          }
 *
 */
 
 
 // WHILE LOOP
 
 // While loop to loop through 0 - 10
 // Start: 0
 // End: 10 including
 let i = 0;
 while(i <= 10) {
    console.log(i); // prints => 0 - 10
    i++;
 }
 
 // Use a while loop to print 10-0 to the console in reverse.
 //start: 10
 //end: 0 including
 let count = 10;
 while (count >= 0) {
   console.log(count); //prints => 10 - 0
   count--;
 }
 
 // FOR LOOP
 
 //Create an colors array
 let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
 
 //create for loop to print all the colors of the array
 //Start: i = 0/// colors[0];
 //End: i < colors.length
 for(let i = 0; i < colors.length; i++){
   // prints => 'red', 'orange', 'yellow', 'green', 'blue', 'purple'
   console.log(colors[i]); 
 }
 
 //Create an array months
let months = ['Jan', 'Feb', 'March', 'April', 'May'];

//create for loop to iterate in reverse and upperCase the values
//Start: months.length - 1;
//End: months[0] 0Index
for(let i = months.length - 1 ; i >= 0; i--){ 
  // prints => MAY, APRIL, MARCH, FEB, JAN
  console.log(months[i].toUpperCase());
}

// FOR-IN LOOP

//create a variable myObject = {}
let myObject = {};
//use dot notation  or bracket notation to add keys name, city and favFood with string values
myObject.name = 'Chhoti'
myObject.city = 'Dallas'
myObject['favFood'] = 'Carrot Cake'

//create a for in loop to iterate over myObject
for(let key in myObject){
  //print the key and it's values of myObject
  console.log(key, myObject[key]); 
}
// prints => { name: 'Chhoti', city: 'Dallas', favFood: 'Carrot Cake' }
console.log(myObject);
