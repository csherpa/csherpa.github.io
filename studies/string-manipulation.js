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
 
 /*1) Concat : Method that concatenates the string arguments to the calling string and returns a new string.
  *          
  */
 console.log(str1.concat(' ', str2)); // prints => Hello World!
 
 //2) Split : Method divides a String into an ordered list of substrings and puts them into an array, and returns the array.
 let str = 'My name is Chhoti Sherpa';
 console.log(str.split(' ')); // prints => ['My', 'name' , 'is', 'Chhoti', 'Sherpa']
 
 /* 3) Slice: This method extracts a section of a string and returns it as a new string, without modifying the original string.
 *  Syntax : slice(beginIndex, endIndex) beginIndex is included and endIndex is exluded from the returned string
 */
 let info = 'My name is Chhoti Sherpa';
 console.log(info.slice(0, 7)); //prints => My name
 
 /* 4) Replace: Method that return a new string, with some or all matches of a pattern replaced by a replacement. 
  *
 */
 
 let newStr = 'My name is Chhoti';
 console.log(newStr.replace('Chhoti', 'Jack')); // prints 'My name is Jack'
 
 /* 5) Substring: Method that returns the part of the string between the start and end indexes, or to the end of the string.
 * Syntax : substring(indexStart, indexEnd) IndexStart is included and indexEnd is exluded from the returned string
 */
 
 let animal = 'Elephant';
 console.log(animal.substring(0, 3)); // prints "Ele"
 
 /* 6) Repeat : Method constructs and returns a new string which contains the specified number of copies of the string on 
  *             which it was called and concatenated together;
  * Syntax: repeat(count);
  * 
 */
 
 let greet = 'Hello';
 console.log(greet.repeat(3));