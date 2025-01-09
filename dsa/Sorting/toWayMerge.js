let arr1 = [1, 2, 4, 6];
let arr2 = [3, 4, 6, 8, 12];
let i = 0;
let j = 0;
let n1 = arr1.length;
let n2 = arr2.length;
let ans = [];
let k = 0;

while(i<n1 && j<n2){
    if(arr1[i] > arr2[j]){
        ans[k++] = arr2[j++];
    }else{
        ans[k++] = arr1[i++];
    }
}

while(i<n1) ans[k++] = arr1[i++];
while(j<n2) ans[k++] = arr2[j++];

console.log(ans);