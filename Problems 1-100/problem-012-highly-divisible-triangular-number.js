function checkFactors(num){

  // Efficiency improved by iterating only till square root of num

  let count = 0

  for (var i = 1 ; i < Math.sqrt(num) ; i++){
    if (num % i == 0){
      count+=2
    }
  }

  if (num % Math.sqrt(num) == 0){
    count++
  }

  return count
}

function divisibleTriangleNumber(n) {

  let i = 1
  let triangleNum = 1

  while(checkFactors(triangleNum) < n){
    i += 1
    triangleNum += i
  }

  return triangleNum;
}

divisibleTriangleNumber(5);