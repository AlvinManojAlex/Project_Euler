function primeSummation(n) {

  // Modifying Sieve of Eratosthenes

  let prime = Array(n).fill(true)
  let sum = 0

  let p = 2

  while(p*p < n){
    if (prime[p] == true){
      for (var i = p*p; i<=n ; i+=p){
        prime[i] = false
      }
    }
    p += 1
  }

  for(var i = 2; i<n ; i++){
    if (prime[i] == true){
      sum += i
    }
  }
  
  return sum;
}

primeSummation(2000000);