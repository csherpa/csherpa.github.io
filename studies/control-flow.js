/*
 * CONTROL FLOW:
 *
 * 0. Control flow refers to the order in which a sequence of code is executed. 
 * Conditional Statements allow us to control the flow of our application. 
 * A conditional statement checks a specific condition(s) and performs a task based on the the condition(s).
 * Which means, you can create test conditions in the form of expressions that evaluates to either true or
 * false and based on these results you can perform certain actions. 
 * 
 * To, start a conditonal block of code, it must start with if statement. The if statement can be
 * chained with any number of else-if statements and append a default else statement at end of the chain.
 *
 * The anatomy of conditional statements:
 * - test-condition in parentheses ()
 * - BODY {} that is executed if condtion is true
 * 
 * 1. The if statement
 * The if statement is used to execute a block of code only if the specified condition evalutes to true.
 *
 * SYNTAX: if(condition) {
 *            // code to be executed
 *         }
 *
 * 2. The if...else statement
 * The if...else statement allows you to execute one block of code if the specified condition evaluates
 * to true and another block of code if it evaluates to false.
 *
 * SYNTAX: if(condition) {
 *            // code to executed if condition is true
 *         } else {
 *            // code to executed if condition is false
 *         }
 *
 * 3. The if...else if....else statement
 * The if...else if...else a special statement that is used to combine multiple if...else statements.
 * 
 * SYNTAX: if(condition) {
 *            // code to executed if condition is true
 *         } else {
 *            // code to executed if condition is false
 *         } else {
 *           // code to be executed if both condition1 and condition2 are false
 *         }
 *
 * 4. The switch...case statement
 * The switch..case statement is an alternative to the if...else if...else statement, which does
 * almost the same thing. The switch...case statement tests a variable or expression against a series  
 * of values until it finds a match, and then executes the block of code corresponding to that match
 * 
 * The break statement tells the JavaScript interpreter to break out of the switch...case statement block 
 * once it executes the code associated with the first true case.
 *
 * SYNTAX: 
 *   switch(x){
 *      case value1:
 *       // Code to be executed if x === value1
 *      break;
 
 *      case value2:
 *       // Code to be executed if x === value2
 *      break;
 *   ...
 *      default:
 *       // Code to be executed if x is different from all values
 *   }
 *
 */


// 1. If Statement

let light = 'Yellow';

//executes when when the condition inside if statement returns true
if(light === 'green'){
    console.log('Go'); // prints => Go
}

// 2. Else if Statement

let people = 1;

if(light === 'green' && people === 0) {
    console.log('Go');
}
// this block of code is exectued since it returns true or meet all conditions
else if(light === 'yellow' && people >= 1) {
    console.log('Slow Down!'); // prints => Slow Down!
}
else if (light === 'red') {
    console.log('Stop');
}


// 3. Else Statement

//Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.
let current = new Date();

// getDay() method returns the weekday as a number from 0 and 6, where 0 represents Sunday
let currentWeek = current.getDay();
console.log(currentWeek); // prints => Sunday - Saturday : 0 - 6 depending on the current day of the week

if(currentWeek >=1 && currentWeek <= 5) {
    console.log("Work Week"); // prints => 'Work Week' when this code executes to true
}  else {
    console.log("Weekend's Here!"); // prints => 'Weekend's Here!' when this code executes to true
}


// 4. Switch Statement

/* Alternative to the if..else if..else statement, which does the same thing.
 *
 * Switch statement test for a variable or expression against series of values until if finds the match and then executes the code.
 * 
 * Break statement must be used to kill the switch block, otherwise execution wil continue to the  next case, and provide unexpected results.
 *
 * Default clause is optional, which specify the actions to be performed if no case matches the switch expression. 
 * 
 */
 
 // prints a console value based on the variable or expression when it executes true
 switch(current.getDay()) {
	case 0:
		console.log("Today is Sunday."); 
		break;
	case 1:
		console.log("Today is Monday.");
		break;
	case 2:
		console.log("Today is Tuesday."); 
		break;
	case 3:
		console.log("Today is Wednesday.");
		break;
	case 4:
		console.log("Today is Thursday.");
		break;
	case 5:
		console.log("Today is Friday.");
		break;
	case 6:
		console.log("Today is Saturday.");
		break;   
	default:
		console.log("No information available for that day.");
 }
