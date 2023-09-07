function multiplesOf3and5(number) {
  var sum = 8
  for (var i = 6; i<number ;i++){
    if (i%3==0 || i%5==0){
      sum+=i
    }
  }
  return sum;
}

multiplesOf3and5(1000);