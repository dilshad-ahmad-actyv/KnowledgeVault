var strStr = function (haystack, needle) {
  let n = haystack.length;
  let n2 = needle.length;
  let index = -1;

  if (n < n2) return -1;

  for (let i = 0; i <= n - n2; i++) {
    let str = "";
    for (let j = i; j < i + n2; j++) {
      str += haystack[j];
    }
    console.log(str, needle);
    if (str === needle) {
      index = i;
      return index;
    } else {
      index = -1;
    }
  }
  return index;
};

strStr("a", "a");
