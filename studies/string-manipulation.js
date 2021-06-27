/*
 * STRING MANIPULATON
 *
 * 0. Comparison operators can be used on string values but string also work with concatenation (+).
 * There are two operators which can be used for string manipulation.
 * 1. With Operators
 * - Concatenation operator (+) Combines two or more strings into one new result string.
 * - The shorthand assignment operator (+=) can also be used to concatenate strings.
 *
 * 2. With String methods
 * - concat() method concatenates the string arguments to the calling string and returns a new string.
 * - join() method combines the elements of an array and returns a string.
 */
 
 // With operators
 
 // CONCATENATION
 let str1 = 'Hello';
 let str2 = 'World!';

 console.log(str1 + ' ' + str2); // prints => Hello World!
 
 //using SHORTHAND with (+=) operator
 let str3 = 'Hi';
 str3 += ' there!';
 console.log(str1 += str2); // prints => Hi there!
 
 // With string methods
 
 // CONCAT METHOD
 console.log(str1.concat(' ', str2)); // prints => Hello World!
 
 // JOIN METHOD
 let name = 'Chhoti';
 let last = 'Sherpa';
 
 let fullName = ['My', 'name' , 'is', name, last];
 console.log(fullName.join(' ')); // prints => My name is Chhoti Sherpa