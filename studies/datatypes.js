/*
 * DATATYPES
 * 
 * 0.In programing, understanding data types is very important, to be able to operate on variable, it is important
 * to know someting about the type. Data types in JavaScript are instructions to program's interpreter regarding
 * how it should handle a given value. Data types are used to store and manipulate information.
 * JavaScript has multiple data types. There are six primitive data types and three complex data types. 
 * The six primitive types are Boolean, null, undefined, Number, String, and NaN.
 * The three complex types are Object, Array and Function.
 *
 * 1. Number : Numeric types
 * 
 * 2. String : Character data. To create a string, the characters are enclosed in single or double quotes. 
 *
 * 3. Boolean : Data type that are of two values, either true or false. Booleans represent the truth values
 * that are associated with the logical branch.
 *
 * 4. Array : List-like objects that are used to store multiple values in a single variable. The values in an
 * array can be accessed by referring to an index number.
 * 
 * 5. Object : Objects are containers for data values. The values are written as key:value pairs.
 * 
 * 6. Function : Function is a block of code designed to perform a particular task. They are executed when 'something' 
 * invokes/calls it.
 * 
 * 7. undefined : Undefined value is assigned to newly created variable that is not assigned with any value.
 * 
 * 8. null : Null represents no-value, nullified by a programmer.
 *
 * 9. NaN : a numeric value that represents a non-number, NaN stands for not a number.
 *
 * 10. Infinity and -Infinity
 *
 * # Infinity: a numeric value that represents a positive number that approaches infinity.
 * 
 * # -Infinity: a numeric value that represents a negative number that approaches infinity.
 *
 * 11. Difference between primitive/simple and complex data types
 * 
 * # Primitive/Simple
 * Primitive/Simple data types are atomic, immutable. They do not hold, collect or aggregate other values.
 * Any operations on simple values return new simple values. They do not alter the original value.
 *
 * # Complex 
 * Complex values collect other values and therefore are of indefinite size.
 *
 * 12. Primitive values (Copy by Value)
 * Primitive data types are copied by value. Copy by value makes a copy of the original variable and if any changes are
 * made to the copy, it does not affect the original.
 *
 * # Complex values (Copy by Reference)
 * Complex data types are copied by reference. Instead if making a copy of the original variable, it makes a reference to 
 * the original value. Therefore a change made on the reference is a change made on the original.
 *
 */
 
 
 // 1. Number //
 /*
  * Numbers can be of positive, negative or decimal number value.
  * Numerical values can be created with arithmetic experessions (+, - , /, %, *, =);
  */
 let num1 = 7;   // written without decimal
 let num2 = 1.5; // written with decimal
 let total = num1 + num2; //new value using arithmetic expression
 
 console.log(num1); // prints => 7
 console.log(num2); // prints => 1.5
 console.log(total); // prints => 8.5
 
 // 2. String //
 /*
  * Individual characters in a string can be accessed with bracket notation.
  * Strings can be combined using the (+) operator.
  * Strings also have a length property which returns the total number of characters in the string.
  */
 let firstName = 'Chhoti'; // enclose in single quotes
 let lastName = "Sherpa";  // enclose in double quotes
 
 console.log(firstName, lastName) // prints => Chhoti Sherpa
 
 // 3. Boolean //
 // comparison operator give true/false value
 let bool = 1 > 2; 
 let bool2 = (1 === 1);
 
 console.log(bool); // prints => false;
 console.log(bool2); //prints => true;
 
 // 4. Array //
 /* Array literal => [];
  * array can hold a collection of other data types.
  * values in array can be accessed with index number
  * methods(push, pop, splice) and properties (length, prototype) can be used to manipulate the array 
  */
 let arr = ['hi', 1, {}, [], false];
 
 console.log(arr);  // prints => ['hi', 1, {}, [], false];
 
 //accessing elements of an array at index 2
 console.log(arr[2]); //pirnts => {}
 
 //push method used to a new value in the array
 console.log(arr.push('chhoti')); //prints ['hi', 1, {}, [], false, 'chhoti'];
 
 //length gives a numerical value
 console.log(arr.length); // prints => 6
 
 // 5. Object //
 /*
  * Object literal => {}
  * Object properties are written as key:value pairs which are separated by commas.
  * In object the keys are unique and values can be of any data types.
  * They do not have index or length property. They can only be access with key[value] pairs.
  * Dot Notation and Bracket Notation are used to access/change the values of an Object.
  */
 let obj = {
     name : 'Chhoti',
     pets : 2,
     isCute: true,
     petsName : ['Sushi', 'Keira']
 }
 
 //Dot Notaion returns the value of the object at a literal key
 console.log(obj.name); // prints => Chhoti
 console.log(obj['petsName']); //prints =>  ['Sushi', 'Keira']
 
 //adding new key:value in the object
 console.log(obj['petsAge'] = [9, 8]);
 console.log(obj.city = 'Dallas');
 
 console.log(obj) /*prints => {
                                name: 'Chhoti',
                                pets: 2,
                                isCute: true,
                                petsName: [ 'Sushi', 'Keira' ],
                                petsAge: [ 9, 8 ],
                                city: 'Dallas'
                              }*/
 
 // 6. Function // 
 /* Reusable blocks of code that accepts inputs, process those inputs, and returns a new data value.
  * There are two stages to creating a function:
  * - Function Declaration/Definition
  * There are 4 parts to a function declaration (name, parameter(s), function body, return statement).
  * Functions can optionally take parameters which are like placeholders for values. So they can take no parameters or as many as requried.
  * Function body is enclosed in {}, that contains the action that that a function performs.
  * - Function Call/Invocation/Execution
  * After declaration of a function, a function call is needed to be used it on some values.
  * There are 2 parts to a function call (name and arguments)
  * Arguments are the actual values that are passed or given to the function that being invoked
  */
 
 //Function Declaration 
 function myFunc(num1, num2) {
  return num1 * num2; // returns the product of num1 and num2
 }
 
 //Function Call
 let product = myFunc(2, 2);
 console.log(product) //prints => 4
 
 // 7. undefined //
 // A variable without a value has an undefined value
 let val;
 console.log(val) // prints => undefined
 
 // 8. null //
 /*
  * A variable can be set to null, if the variable is not expected to have a type or value
  */
 let empty = null;
  
  
 // 9. NaN //
 /*
  * 'Not-a-Number' value. NaN property indicates that a value is not a legal number.
  */
 let notANumber = Number.NaN;
 console.log(notANumber);
 
 // 10. Infinity and -Infinity //
 /*
  * Infinity and -Infinity will be return value if there is a calculation of a number outside of the largest
  * possible number available in JavaScript. These will occur for values that are undefined, as when dividing by 0.
  */
 let infinityNum = 5 / 0;
 let infinityNum1 = - 5 / 0; 
 
 console.log(infinityNum);  //prints => Infinity
 console.log(infinityNum1); //prints => -Infinity
 
 // 11. Primitive/Simple and Complex data types //
 
 /* The value of a primitive data type cannot be changed once it is set and assigned to a variable.
  * Atomic: There's only ever a singular value in a Number
  * Operations on Primitive/Simple data returns new primities
  *
  */
  
 let name = 'Sam';
 let fullName = name + 'Smith';
 console.log(name) //prints => Sam
 console.log(fullName) //prints => Sam Smith
  
 // Complex data types can be changed unlike primitive data types.
 let carMake = ['Ford', 'Honda', 'Tesla'];
 carMake.push('Toyota');
 console.log(carMake); //prints => ['Ford', 'Honda', 'Tesla','Toyota']
  

 // 12. Copy by Value/Copy by Reference //
 
 //Primitive types are copied by value
 let original = 1;
 let copied = original; // the value of (let original) is copied into (let copied);
 
 //changing the value of copied does not change the value of the original;
 //copied value is being reassigned to 2
 copied = 2;
 
 console.log(original) //prints => 1;
 console.log(copied) //prints => 2;
 
 //Complex types are copied by reference
 let number = 5;

 function double(n) {
  n *= 2;
  console.log(n); // prints => 10
 }
  
 double(number);
 console.log(number); // prints => 5