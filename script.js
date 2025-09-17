const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let current = [];
  let sum = 0;

  for (let num of arr) {
    // If adding this number exceeds n, start a new subarray
    if (sum + num > n) {
      result.push(current);
      current = [];
      sum = 0;
    }
    current.push(num);
    sum += num;
  }

  // Push the last group if not empty
  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
