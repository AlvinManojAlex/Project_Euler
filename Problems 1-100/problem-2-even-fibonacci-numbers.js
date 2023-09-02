function fiboEvenSum(n) {
  let arr=[1, 2]
  var sum=0
  for (var i = 2; i<n; i++){
    arr[i] = arr[i-1] + arr[i-2]
  }

  for (var i = 0; i < arr.length; i++){
    if (arr[i]%2==0 && arr[i]<=n){
      sum+=arr[i]
    }
  }

  return sum;
}