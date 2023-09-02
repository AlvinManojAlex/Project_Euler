function isPrime(number){
  for(var i = 2; i<=number/2 ; i++){
    if (number%i==0){
      return false
    }
  }
  return true
}

function largestPrimeFactor(number) {
  let factors = []

  for(var i = 2; i<=number ; i++){
    if (number%i==0 && isPrime(i)){
      factors.push(i)
    }
  }

  return Math.max(...factors);
}

largestPrimeFactor(13195);