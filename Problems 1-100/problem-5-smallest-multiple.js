function gcd(a, b){
  let hcf = 1
  for (var i = 2; i<=a && i<=b ; i++){
    if (a%i==0 && b%i==0){
      hcf = i
    }
  }
  return hcf
}

function lcm(a, b){
  return (a*b)/gcd(a, b)
}

function smallestMult(n) {
  
  // smallest multple is the LCM of the numbers from 2 to n

  let ans = 1
  let arr = []
  
  for( var i = 2; i<=n ; i++){
    arr.push(i)
  }

  for( var i = 0 ; i<arr.length; i++){
    ans = lcm(arr[i], ans)
  }
  
  return ans
}

smallestMult(20);