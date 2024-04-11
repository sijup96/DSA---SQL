// O(n)

function isValid(s) {
    let stack = [];
    for (const i of s) {
      const char = i;
      if (char === "(" || char === "{" || char === "[") {
        stack.push(i);
      } else if (char === ")" || char === "}" || char === "]") {
        if (isEmpty(stack)) {
          return false;
        }
        const top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "}" && top !== "{") ||
          (char === "]" && top !== "[")
        ) {
          return false;
        }
      }
    }
    return isEmpty(stack);
  }
  function isEmpty(stack) {
    return stack.length === 0;
  }
  
  const str='[]{}(){{}}'
  console.log(isValid(str));