const reverseWord = function (str) {
  let s = str.split(" ");
  let stack = [];
  for (let i of s) {
    stack.push(i);
  }
  let res = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      res += " " + current;
    }
  }
  return res.trim();
};
console.log(reverseWord("siju is beauty"));
