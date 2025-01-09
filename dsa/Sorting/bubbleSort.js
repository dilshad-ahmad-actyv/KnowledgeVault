// let arr = [1, 2, 3, 4, 5, 6].reverse();
// let n = arr.length;
// console.log(arr)
// for(let i=0; i<n; i++){
//     for(let j=0; j<n - i - 1; j++){
//         if(arr[j] > arr[j+1]){
//             // let temp = arr[j];
//             // arr[j] = arr[j+1];
//             // arr[j+1] = temp;
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//     }
// }
// console.log(arr)

const arr = [2, 3, 1, 2, 2, 0, -1, 100, 0, 8, 4];
const n = arr.length;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    if (arr[j] < arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr);
