function runProgram(input) {
    input = input.trim().split('\n');
    let test = +input[0];
    let line = 1;

    for(let i=0; i<test; i++){
        let n = +input[line++];
        let nums = input[line++].trim().split(' ').map(Number);
        const result = productOfArray(n, nums);
        console.log(result);
    }

    function productOfArray(n, nums){
        let ans = [];
        let products = 1;
        for(let i=0; i<n; i++){
           products *= nums[i];
        }

        for(let j=0; j<n; j++){
            let eachProduct = products / nums[j];
            ans.push(eachProduct);
        }
        return ans.join(' ');
    }
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
