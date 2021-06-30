/*
 * FUNCTIONS:
 * 0. Functions in JavaScript are 'first-class' objects. Function is a group of statements that perform specific 
 * tasks and can be kept and maintained separately form main program.
 * Reusable blocks of code that accepts inputs, process those inputs, and returns a new data value.
 * 
 * SYNTAX : function functionName(parameter) {
 *             // Code to be executed
 *          }
 * 1. There are two stages to creating a function:
 *    - Function Declaration/Definition : creating the Function
 * There are 4 parts to a function declaration (name, parameter(s), function body, return statement).
 * Function body is enclosed in {}, that contains the action that that a function performs.
 *    
 *    - Function Call/Invocation/Execution : using the Function
 * After declaration of a function, a function call is needed to be used it on some values.
 * There are 2 parts to a function call (name and arguments).
 * To call a Function, it must be referenced by its name or the variable name to which its assigned, then pass any values expected.
 * 
 * 2. Difference between a function’s parameters and arguments PASSED to a function?
 * PARAMETERS : Functions can optionally take parameters which are like placeholders for values. 
 *              Therefore functions can take no parameters or as many as requried.
 *              Parameters are set on the first line of the function inside the set of parentheses.
 *
 * ARGUMENTS : Arguments(inputs) are the actual values that are passed or given to the function that's being invoked.
 *             Arguments are like passengers, and parameters like car seats. A function with two parameters, should
 *             have 2 values passed in function when being called/invoked.
 * 
 * SYNTAX : functionName(arguments) // Function Call/Invoked
 *
 * 3. NAMED Function
 * Named functions in JavaScript is just a fancy way to refer to a function that uses the function keyword and then
 * a name you can use as a reference to that function.
 *
 * SYNTAX : function calculate(num1, num2) {
 *              return num1 + num2;
 *           }
 * The name of the Function is calculate. Named Function definitions are hoisted to the top of their scope,
 * so they can be used in the program before they appear to be defined.
 * 
 * 4. Function assigned to a variable (Function Expression)
 * A Function Expression is formed when an anonymous Function is assigned to a variable or const.
 * When using function expressions, the function can only be called after being assigned to a variable.
 *
 * SYNTAX : const name = function(parameter) {}
 * 
 *
 * 5. Inputs/Outputs
 * Inputs are datatype that is being passed into the function.
 * Outputs are whot should a function return.
 *
 * Functions return a single output. By default, Functions will return undefined, 
 * unless using the return keyword followed by a value in a function body.
 *
 * Parameters are inputs in the function example below.
 *  function(parameter1, parameter2) {
 *     //function body code
 *     return parameter1 + parameter2;
 *   }
 *
 * 6. SCOPE
 * Scope defines where variables can be accessed or referenced. There are two types of scope:
 * - Global Scope : In global scope, variables are declared outside of blocks. Since global
 *                  variables are not bound inside a block, they can be accessed by any
 *                  code in the program including code in blocks.
 *
 * - Local Scope : Functions in JavaScript have local scope. Local scope refers to
 *                 declaration that happen within the function body, so it's not accessaible
 *                 in the parent scope
 *
 * Block Scope : A type of local scope that is defined inside a curly braces {}. Variables 
 *               defined with let and const are block-scoped.
 * 
 * Nested Scope : Nested scope can be formed when a function is defined within another funtion. 
 *                In nested scope a variable declared in a function can be accessed by another
 *                function within that function body.
 * 
 * Closure : A closure is the combination of a function bundled together (enclosed) with references
 *           to its surrounding state (the lexical environment). Which means, a closure gives us access 
 *           to an outer function's scope from an inner function. In JavaScript closures are 
 *           created every time a function is created, at function creation time.
 */ 
 
 // 1) Function Declaration/Definition
 function sayMyName() {
     console.log('Hi Chhoti!'); 
 }
 
 // 2) Function Call/Invoation 
 sayMyName(); // prints 'Hi Chhoti!'
 
 // 3) Passing Parameter and Arguments 
 function rectangleArea( width, length) {
     //return keyword gives us a value back as a result
     console.log(width * length);
 }
 
 //Calling rectangleArea and passing arguments
 rectangleArea(2, 4); //prints => 8
 
 // 4) Function Expression 
 // The function below is being assigned to a variable getAdd and can be used as a function.
 let getAdd = function(num1, num2) {
     return num1 + num2;
 }
 
 // Function call using the variable getAdd
 getAdd(2, 2); //return => 4
 
 // 5) Inputs/Outputs
 // I: 2 Strings (firstName, lastName)
 // O: 1 String (firstName and lastName concatenated together)
 function fullName(firstName, lastName) {
     // return keyword gives us the output
     return `${firstName} ${lastName}`;
 }
 
 fullName('Chhoti', 'Sherpa'); // returns => 'Chhoti Sherpa'
 
 
 // 6) Scope 
 
 // GLOBAL SCOPE
 let name = 'Jack';
 
 function giveName() {
     name = 'Sparrow';
 }
 
 console.log(name) //prints => 'Jack'
 
 giveName() // calling the function
 
 console.log(name); // prints => 'Sparrow'
 
 // LOCAL SCOPE
 
 // variable last can only be accessed within the giveName();
 function giveName() {
     let last = 'Sparrow'
     console.log(last); //prints => Sparrow
     return last;
 }
 
 console.log(giveName()); //Returns string 'Sparrow'
 
// BLOCK SCOPE
//Variables defined with let and const are block-scoped

if(true) {
 var notBlock = 2;
 let blocked = notBlock;
}

console.log(notBlock); // prints => 2;

// console.log(blocked);// prnts => ReferenceError: blocked is not defined

// NESTED SCOPE
function add() {
 let counter = 1;
 
 //a nested function inside add()
 function plus(){
  //child scopes can have access to parent scopes
  counter += 1; //adds 1 (counter = counter + 1);
 }
 //function call
 plus();
 console.log(counter); // prints => 2
}

//function call
add();


// Closures
function greeting(message) {
 //Anonymous Function called within greeting();
 //This function takes a name and returns a concatenated string.
 return function(name) {
  return `${message} ${name}`;
 }
}

// the variable sayHello has the value of greeting();
let sayHello = greeting('Hello')

//sayHello() call returns concatenated string.
sayHello('Chhoti');// return => 'Hello Chhoti' 