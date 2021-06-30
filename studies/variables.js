/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type. Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 * To create a variable we use the keyword, var, let or const followed by a name (id or alias) for our
 * variable. 
 * SYNTAX : var varName = value;
 *
 * 1. There are 2 phases of using variables: declaration and initialization (or assignment).
 *  - Declaration: A variable can be declared using var,let and const keyword, followed by a name.
 *  - Initialization: A value given to the variable using the = operator.
 *
 * 2. Var, Let, Const
 * We know that var,let and const keyword is needed to declare a variable. 
 *
 * - Var: This keyword allows us to declare a function-scoped variables. The values of the variable declared
 *        with var can be reassigned and hoisted.
 *
 * - Let: This keyword allows us to declare a block scope variable.This limits the variable's scope to the block, 
 *        functions and to loop blocks.The values of the variable declared with let can be reassigned but is not hoisted.
 *        
 * - Const: This keywords is also allows us to declare a block scope variable, except variable declared using
 *          const cannot be reassigned later. This limits the variable's scope to the block, functions and to loop blocks.
 *          Variables declared with const cannot be hoisted.
 *
 * 3. Hoisting
 * Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. 
 * Before the statements of a program are executed all var and function declarations are dragged up to the top of the program.
 * Because of this var values will not throw ReferenceErrors if you try referencing them before they are declared,
 * only return the value of undefine. 
 * NOTE: only the declaration, not the initialization, is brougth to the top.
 *  
 * let and const values are not hoisted.
 *
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
console.log(myVariable); //prints => someString

//LET 
//let variables can be re-assign
let favFood = 'Carrot Cake';
favFood = 'Pad Thai';
console.log(favFood); //prints => Pad Thai

// CONST
//const variables cannot be re-assigned
const color = 'Red';
// color = 'Blue';
console.log(color); //prints => TypeError: Assignment to constant variable.

// 4. Hoisting

console.log(petName); // prints => undefined
var petName = 'Sushi';
console.log(petName); // prints => Sushi

//let and const values are not hoisted
// console.log(num); //prints => ReferenceError: Cannot access 'num' before initialization
// console.log(numOfPeople);// prints ReferenceError: Cannot access 'numOfPeople' before initialization

let num = 2;
const numOfPeople = 3;