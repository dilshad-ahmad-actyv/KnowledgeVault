function runProgram(input) {
    let nums = input.trim().split(' ').map(Number);
    const result = findMissingInteger(nums);
    console.log(result);

    function findMissingInteger(nums){
        nums = nums.sort((a, b)=> a - b);
        
        for(let i=1; i<nums.length; i++){
            const diff = nums[i] - nums[i-1];
            if(diff !== 1){
                const sum = nums[i] + nums[i-1];
                return sum/2;
            }
        }
        return -1;
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`4 5 1  3`);
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
