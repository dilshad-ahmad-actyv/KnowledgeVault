function runProgram(input) {
    let nums = input.trim().split(' ').map(Number);
    let result = productOfN(nums);
    console.log(result)
    function productOfN(nums){
        let product = 1;
        let n = nums.length;
        for(let i=0; i<n; i++){
            product = product * nums[i];
        }
        return product;
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`1 2 3 4 5 6`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
