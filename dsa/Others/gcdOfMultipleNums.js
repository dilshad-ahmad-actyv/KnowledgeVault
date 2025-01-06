function runProgram(input) {
    input = input.trim().split('\n');
    let test = +input[0];
    let line = 1;

    for(let i=0; i<test; i++){
        let n = +input[line++];
        let nums = input[line++].trim().split(' ').map(Number);
        
        const finalResult = gcdOfMultipleNums(n, nums);
        console.log(finalResult)
    }

    function gcdOfMultipleNums(n, nums){
        let safePrime = 1000000007;
        const gcd = findGCD(n, nums);
       let multiple = nums.reduce((cv, num)=> cv*num % safePrime);
        let result = (multiple ** gcd) % safePrime;
        return result;
    }
}
  


function findGCD(n, nums){
    function gcdOfTwoNums(a, b){
        if(b === 0) return a;
        return gcdOfTwoNums(b, a%b);
    }
    let result = nums[0];
    for(let i=1; i<n; i++){
       result = gcdOfTwoNums(result, nums[i]);
    }
    return result;
}
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`7
    3
    6 10 10
    7
    3 7 4 8 10 3 10
    2
    11 6
    6
    3 5 5 10 5 5
    2
    4 8
    3
    11 6 8
    3
    4 3 8`);
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
