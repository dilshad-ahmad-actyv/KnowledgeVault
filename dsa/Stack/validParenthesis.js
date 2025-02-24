// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   const stack = [];
//   const n = s.length;
//   const openP = ['(', '{', '['];
//   const closeP = [')', '}', ']'];
//   let flag = true;
//   if (n <= 1) {
//     flag = false;
//   }

//     let i = 0;
//     while (i < n) {
//         if (openP.includes(s[i])) {
//             stack.push(s[i]);
//             flag = true;
//         }
//         const sn = stack.length;
//       if (closeP.includes(s[i])) {
//         if (
//             (stack[sn - 1] === '(' && s[i] === ')') ||
//             (stack[sn - 1] === '{' && s[i] === '}') ||
//             (stack[sn - 1] === '[' && s[i] === ']')
//         ) {
//             stack.pop();
//             flag = true;
//           }else {
//               flag = false;
//               break;
    
//           }
//       }
//       i++;
//   }

//   if (flag === true && !stack.length ) {
//     return true;
//   } else {
//     return false;
//   }
// };


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//     const stack = [];
//     const pairs = { '(': ')', '{': '}', '[': ']' };
  
//     for (const char of s) {
//         console.log(char)
//       if (pairs[char]) {
//         stack.push(char);
//       } else {
//         if (!stack.length || pairs[stack.pop()] !== char) {
//           return false;
//         }
//       }
//     }
//     // console.log('stack',  stack)
//     return stack.length === 0;
//   };
  

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }


    for (const char of s) {
        console.log(char)
        if(pairs[char]){
            stack.push(char);
        }else{
            if(!stack.length || pairs[stack.pop()] !== char){
                return false;
            }

        }
    }
    // console.log('stack',  stack)
    return stack.length === 0;
};

const s = '()';
const res = isValid(s);
console.log(res);
