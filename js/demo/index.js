// let str = false;
// str = String(str);
// console.log(typeof str)
// console.log(str);

// console.log(Boolean(undefined));// false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(' ')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean('hello')); // true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true

// let a, b, c;
// a = b = c = 2 + 2;
// chaining assignment operation
// let c = 2 + 2;
// let b = c;
// let a = c;
// console.log(a, b, c);

// increment/decrement operator
// postfix/prefix operator ++/--
// all the operators returns a value, including increment/decrement

// prefix form - it returns the new value
// postfix form - it returns the old value

// prefix/postfix both does the same thing, the only difference will show when we use the return value

// let count = 0;
// let a = ++count;
// console.log(a);

// Comma(,) - Comma operator has very low precence. less than assignment operator(=) too.
// use case

// let z = (x = 1 + 3, 3 * x);
// console.log(z);

// for (let i = 0, j = 1, k = i * j; k < 10; k=i++*j++){
//     console.log(k);
// }

// for (let i = 0, j = 1, k = i * j; k < 10; k=++i*++j){
//     console.log(k);
// }

// Comparison operator: >, <, >=, <=, ==, ===, !=, !==
// String - Javascript uses dictionary or lexicographical order to compare with string
// in other words, Strings are compared letter-by-letter

// let str1 = 'A';
// let str2 = 'a';
// console.log(str1 > str2)

// Equality operator(==): Check equality with type conversion. here '==' converts the 'Operand''s type and do the checking
// Strict Equality Operator(===): This check equality without type conversion of the 'Operands'

let age = 30;
// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
// }

// ternary/question mark/condition operator

// let message =
//   age < 3
//     ? 'Hi, baby!'
//     : age < 18
//     ? 'Hello!'
//     : age < 100
//     ? 'Greetings!'
//     : 'What an unusual age!';

// console.log(message);

// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// // if the first operand is falsy,
// // AND returns it. The second operand is ignored
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

console.log(0 || null || 10)

// prcedence : && > ||

// !(NOT) Operator:
// The operator accepts a single argument and does the following:

// 1. Converts the operand to boolean type: true/false.
// 2. Returns the inverse value.

// !!(NOT) Operator:
// 1. Converts the operand to boolean type: true / false
// 2. Returns the inverse value
// 3. It reverse it

// Prcedence: !(NOT) > &&  (AND) > || (OR)