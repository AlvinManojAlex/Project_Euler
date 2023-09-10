function powerDigitSum(exponent) {

  let prod = 1
  let sum = 0

  for (var i = 1; i<=exponent ; i++){
    prod*=2
  }

  // Converting to BigInt datatype

  prod = BigInt(prod)

  let digits = prod.toString().split('')
  
  sum = digits.reduce((sum, digit) => sum + parseInt(digit), 0)
  return sum
}

powerDigitSum(128);