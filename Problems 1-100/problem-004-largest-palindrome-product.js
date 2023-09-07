function largestPalindromeProduct(n) {
  let max = Math.pow(10, n) - 1
  let min = Math.pow(10, n-1)
  let ans = 0
  
  for(var i = max; i >= min; i--){
    for(var j = max; j >= min; j--){
      let product = (i*j).toString()
      let temp = product.split("").reverse().join("")
      if (product == temp && i*j>ans){
        ans = i*j
      }
      
    }
  }
  return ans;
}

largestPalindromeProduct(3);