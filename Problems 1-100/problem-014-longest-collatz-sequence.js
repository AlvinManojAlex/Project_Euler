function collatzLength(num){
  let arr = []
  while (num != 1){
    arr.push(num)
    if (num%2 == 0){
      num = num/2
    }
    else if (num%2 != 0){
      num = 3*num + 1
    }
  }
  return arr.length+1
}

function longestCollatzSequence(limit) {

  // Possible that longest Collatz Sequence is near the limit, so iterate downward from limit

  let length = 1
  let num = 1

  for( var i = limit ; i>0 ; i--){
    let new_length = collatzLength(i)
    if (new_length > length){
      length = new_length
      num = i 
    }
  }

  return num;
}

longestCollatzSequence(1000000);