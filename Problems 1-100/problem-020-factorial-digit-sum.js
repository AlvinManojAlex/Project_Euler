function factorial(n) {
  if (n === 0) {
    return "1";
  }
  let result = "1";

  for (let i = 2; i <= n; i++) {
    result = multiply(result, i.toString());
  }

  return result;
}

function multiply(a, b) {
  const num1 = a.split("").map(Number);
  const num2 = Number(b);
  let carry = 0;
  let product = [];

  for (let i = num1.length - 1; i >= 0; i--) {
    const temp = num1[i] * num2 + carry;
    product.unshift(temp % 10);
    carry = Math.floor(temp / 10);
  }

  if (carry > 0) {
    product.unshift(carry);
  }

  return product.join("");
}

function sumFactorialDigits(n) {

  const nFactorial = factorial(n);
  const digits = nFactorial.split("").map(Number);
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return sum;
  
}

sumFactorialDigits(100);