/*
 * OPERATORS
 *
 * 0. An operator performs some operation on single or multiple operands (data value) and produces a result.
 * Operators act on our data by assigning them to a variable or comparing them or include in arithmetic operators.
 * Unary operators only work wih one value, binary with two, and ternary with three.
 *
 * Types of Operators:
 * 1. Assignment operator (=) assigns a value to a variable.
 *    - Assignment operator (=, +=, -=, *=, /=)
 *
 * 2. Arithmetic operators are used to perform arithmetic on numbers.
 *    - Arithmetic operators (+, -, * , /, %)
 *
 * 3. Comparison operators returns a logical value based on whether if the comparison is true or false.
 *    - Comparison operators (>, <, >=, <=, ===, !==)
 * Most comparison operators are used in conditional statements
 *
 * 4. Logical operators are used to test for true or false.
 *    - Logical operators (&&, ||, !, !!)
 *    - && is the AND operator returns true when both conditions are true
 *    - || is the OR operator returns when one or the other conditions resolve to true
 *    - ! bang operator, it flips the trutiness of the value
 *
 * 5. Unary operators
 * Unary operators only work with one value
 *
 * 6. Ternary operator
 * Conditional operator that assigns a value to a variable based on some condition
 * SYNTAX : varName = (condition) ? value1:value2
 *
 */
 
 // 1. Assignment operators
 let number; // Declaring a variable
 
 number = 10; //Assigning variable
 console.log(number); // prints => 10
 
 number += 10;
 console.log(number); // prints => 20
 
 number -= 5;
 console.log(number); // prints => 15
 
 number *= 5;
 console.log(number); // prints => 75
 
 number /= 15;
 console.log(number); // prints => 5
 
 // 2. Arithmetic operators
 let num1 = 8;
 let num2 = 2;
 
 console.log(num1 + num2); //prints => 10
 console.log(num1 - num2); //prints => 6
 console.log(num1 * num2); //prints => 16
 console.log(num1 / num2); //prints => 4
 console.log(num1 % num2); //prints => 0
 
 //3. Comparison operators
 let a = 2;
 let b = 3;
 let c = '2';
 
 console.log(a === b); // prints => false
 console.log(a !== b); // prints => true
 console.log(a < b); // prints => true
 console.log(a > b); // prints => false
 console.log(a <= b); // prints => true
 console.log(a >= b); // prints => false

 
 // 4. Logical operators
 console.log(6 < 10 && 3 > 1); // prints => true
 console.log( 6 === 5 || 3 === 5); //prints => false
 console.log(!true) //prints => false
 
 /* The Double Bang is two bang operators together, this coercess a value to Boolean.
  */
 console.log(!!true) // prints => true
 
 // 5. Unary operators
 let up = 9;
 ++up // increment operator add 1 to up
 console.log(up); // print => 10
 
 --up; // decrement minus 1 from 10
 console.log(up); //prints => 9
 
 //Unary minus (-) – convert an operand into a number and negate the value after that.
 console.log(-up); //prints => -9
 
 //Unary plus (+)  – convert an operand into a number
 console.log(+up); // prints => 9
 
 //typeof operator checks the data type of a variable's value
 console.log(typeof up); // prints => number
 
 //the bang operator flips the truthness of a value
 console.log(!false); // prints => true
 
 // 6. Ternary operators
 //SYNTAX : varName = (condition) ? value1:value2
 let age = 18;
 let canDrink = age < 21 ? 'No Drink' : 'Drink Up!!';
 console.log(canDrink); // prints => No Drink