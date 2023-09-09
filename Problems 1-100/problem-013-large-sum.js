function largeSum(arr) {

  let sum = arr.reduce((acc, item) => acc + Number(item), 0)

  // Splitting the number after the exponent and only taking the numeric part.

  let num = sum.toString().split('e')[0]
  num = num * 1e9

  return num - num%1;
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);