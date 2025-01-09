// let arr = [5,5, 4, 5, 4, 4, 4, 3, 1,1,1, 2, 1];
// let n = arr.length;

// for(let i=1; i<n; i++){
//     let current = arr[i];
//     let j = i-1;

//     while(j >=0 && current < arr[j]){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = current;
// }

// console.log(arr)

let arr = [5, 4, 4, 3, 1, 2, 3, -1, 2, 1];
let n = arr.length;

for (let i = 1; i < n; i++) {
  let j = i - 1;
  let current = arr[i];
  while (j >= 0 && current < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}

console.log(arr);
