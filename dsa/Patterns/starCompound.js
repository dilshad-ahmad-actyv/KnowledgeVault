let n = 6;
let mid = Math.floor(n/2);
let start = 0;
let end = n  - 1;
for(let i=0; i<n; i++){
    let str = '';
    for(let j=0; j<n; j++){
        if(i == 0 || j == 0 || i ==n-1 || j == n-1){
            str += '*' + ' ';
        }else{
            if(i == start + 1 || j == start + 1 || i == end - 1 || j == end-1){
                str += ' ' + ' ';
            }else{
               str += '*' + ' ';
                
            }
            
        }


    }
    console.log(str.trim());
}



// let n = 10;
// let mid = Math.floor(n/2);
// let start = mid - 1;
// let end = n - mid;
// for(let i=0; i<n; i++){
//     let str = '';
//     for(let j=0; j<n; j++){
//         if(i == 0 || j == 0 || i ==n-1 || j == n-1){
//             str += '*' + ' ';
//         }else{
//             if(i == start + 1 || j == start + 1 || i == end - 1 || j == end-1){
//                 str += ' ' + ' ';
//             }else{
//                str += '*' + ' ';
                
//             }
            
//         }


//     }
//     console.log(str.trim());
// }


// * * * * * * * * * *
// *                 *
// *   * * * * * *   *
// *   * * * * * *   *
// *   * * * * * *   *
// *   * * * * * *   *
// *   * * * * * *   *
// *   * * * * * *   *
// *                 *
// * * * * * * * * * *











// let n = 10;
// let mid = Math.floor(n/2); 
// for(let i=0; i<n; i++){
//     let str = '';
//     for(let j=0; j<n; j++){
//         if(i == 0 || j == 0 || i ==n-1 || j == n-1){
//             str += '*' + ' ';
//         }else{
//             if( ((i === mid && i !==j) || (j=== mid && i !==j))){
//                 str += '*' + ' ';
//             }else{
//                 str +=  ' ' + ' ';
//             }
            
//         }


//     }
//     console.log(str.trim());
// }



