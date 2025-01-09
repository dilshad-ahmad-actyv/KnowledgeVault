// function sort(arr) {
//   let l = 0;
//   let n = arr.length;
//   const result = mergeSort(arr, l, n);
//   console.log(result);

//   function mergeSort(arr, l, h) {
//     if (arr.length === 1) return arr;
//     if (l < h) {
//       let mid = Math.floor((l + h) / 2);

//       let left = arr.slice(l, mid);
//       let right = arr.slice(mid, h);

//       let n1 = left.length;
//       let n2 = right.length;

//       let elem1 = mergeSort(left, 0, n1);
//       let elem2 = mergeSort(right, 0, n2);

//       return merge(elem1, elem2);
//     }
//   }

//   function merge(left, right) {
//     let i = 0;
//     let j = 0;
//     let n1 = left.length;
//     let n2 = right.length;
//     let ans = [];
//     let k = 0;
//     while (i < n1 && j < n2) {
//       if (left[i] > right[j]) {
//         ans[k++] = right[j++];
//       } else {
//         ans[k++] = left[i++];
//       }
//     }

//     while (i < n1) ans[k++] = left[i++];
//     while (j < n2) ans[k++] = right[j++];
//     return ans;
//   }
// }

// let arr = [1, 3, 5, 0, -1, -23, 0, 6];
// const result = sort(arr);
// console.log(result);

let arr = [1, 3, 5, 0, -1, -23, 0, 6];
let l = 0;
let h = arr.length;
const result = mergeSort(l, h, arr);
console.log(result);

function mergeSort(l, h, arr) {
  //   console.log(arr);
  if (arr.length === 1) return arr;

  if (l < h) {
    let mid = Math.floor((l + h) / 2);
    let left = arr.slice(l, mid);
    let right = arr.slice(mid, h);

    return merge(
      mergeSort(0, left.length, left),
      mergeSort(0, right.length, right)
    );
  }
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      res.push(right[j]);
      j++;
    } else {
      res.push(left[i]);
      i++;
    }
  }
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }

  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  return res;
}
