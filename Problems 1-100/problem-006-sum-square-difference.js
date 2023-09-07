function sumSquareDifference(n) {

  // Using the general formula for both

  let sum_of_squares = (n * (n+1) * (2*n+1))/6
  let squares_sum = Math.pow((n * (n+1)/2),2)

  return (squares_sum - sum_of_squares);
}

sumSquareDifference(100);