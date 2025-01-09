const str = "Hello";
const result = reverseString(str, "", 0);
console.log(result);
// function reverseString(str) {
//   if (!str.length) return "";
//   return reverseString(str.substring(1)) + str.charAt(0);
// }

function reverseString(str, reverse, position) {
  if (!str[position]) return "";
  console.log(reverse);
  return reverseString(str, str.charAt(position) + reverse, position + 1);
}
