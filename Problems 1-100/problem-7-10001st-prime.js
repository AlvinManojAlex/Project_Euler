function nthPrime(n) {

  // Finding the nth prime by the 'Sieve of Eratosthenes'

  let max = 1000000
  let prime = Array(max).fill(true)
  let ans = []

  let p = 2

  while(p*p < max){
    if (prime[p] == true){
      for (var i = p*p; i<=max ; i+=p){
        prime[i] = false
      }
    }
    p += 1
  }

  for(var i = 2; i<max ; i++){
    if (prime[i] == true){
      ans.push(i)
    }
  }
  
  return ans[n-1];
}

nthPrime(6);