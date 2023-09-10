function calcFactorial(n){
  
  let prod = 1
  for( var i = 2; i<=n ; i++){
    prod *= i
  }
  return prod
}

function latticePaths(gridSize) {

  // N right and N down. Permutate these to get number of routes
  // Mathematically solve this as (2N)!/(N!)*(N!)

  return calcFactorial(2*gridSize)/Math.pow(calcFactorial(gridSize), 2);

}

latticePaths(4);