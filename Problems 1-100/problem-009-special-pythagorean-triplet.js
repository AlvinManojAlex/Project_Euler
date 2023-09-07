function specialPythagoreanTriplet(n) {
  let sumOfabc = n;

  for(var i = 0 ; i<n/3 ; i++){
    for(var j = i+1 ; j<n/2 ; j++){
      let k = n - i - j
      if (k*k == i*i + j*j){
        return i*j*k
      }
    }
  }
}

specialPythagoreanTriplet(1000);