/*
 * FUNCTIONS:
 * 0. Function is a group of statements that perform specific tasks and can be kept and maintained separately form main program.
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
 */