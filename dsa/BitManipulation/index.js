// Bit (Binary Digit)
// Definition: A bit is the smallest unit of data in computing. It can have one of two possible values: 0 or 1.
// Binary System: Bits are used to represent data in the binary number system, which is base-2. Each bit represents an exponent of 2.
// Usage: Bits are used to encode data in binary format. For example, a single bit can represent a boolean value (true/false), a single binary digit, or a small piece of information.


// Byte
// Definition: A byte is a group of 8 bits. It is a larger unit of data that can represent a wider range of values compared to a single bit.
// Range: Since a byte consists of 8 bits, it can represent 2^8 or 256 different values (ranging from 0 to 255 in decimal form).
// Usage: Bytes are commonly used to represent characters in text, such as letters, digits, and symbols, especially in ASCII and UTF-8 encoding systems. In computer systems, bytes are the standard unit for measuring and addressing memory.

// Summary
// Bit: The smallest unit of data, represented as 0 or 1.
// Byte: A group of 8 bits, used to represent a wider range of values and commonly used for data storage and character encoding.

// BitManipulation
// operators - &(and), | (or), ^(xor), ~(not), << (Bitwise left shift), >> (Bitwise right shift), >>> (zero fill right shift)

// & - return true if both the operands true
// | - return true if either operands true
// ^ - return true if both operand are different
// ~ - flips the value of operand
// << - shifts the bit toward left
// >> - shifts the bit toward right
// >>> - shift the bit toward right but add the zero from the left'

// Bit Masks
// 1. isBitSet
// 2. setBit
// 3. clearBit
// 4. toggleBit


// let a = 10;
// let position = 1;
// let isSet = a & (1 << position); // check bit existence
// let setBit = a | (1 << position); // set bit
// let clearBit = a &= ~(1 << position); // Clears the bit at 'position'
// let toggleBit = a ^= (1 << position); // Toggles the bit at 'position'

// 1. bit iteration

// function countSetBits(n) {
//     let count = 0;
//     while (n) {
//         count += n & 1;
//         n >>= 1;
//     }
//     return count;
// }

// const num = 7;
// const res = countSetBits(num);
// console.log(res);

// Swap the two number

// let a = 10;
// let b = 5;

// a ^= b;
// b ^= a;
// a ^= b;

// console.log(a);
// console.log(b);


// Zero Fill Right Shift(>>>) - logical right shift
// left shift (>>) - arithmatic right shift
// * there is no 'Zero Fill Left Shift' concept exists.

// >> Vs >>>

// let n = -4;
// let cal = n >>> 2;
// console.log(cal.toString(2));
// // let n = 202;
// // let bin = n.toString(2);
// // let cal = 202 >>> 3;
// // console.log(cal);

// // Signed Vs Unsigned integers

// JavaScript Example
// let num = -4; // In binary: 11111100
// let shifted = num >>> 2; // Shift right by 2 positions

// console.log(shifted.toString(2)); // Output: 00111111 (in binary)
// console.log(shifted); // Output: 1073741821 (in decimal, considering it as 32-bit unsigned integer)
