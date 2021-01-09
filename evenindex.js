var evenIndex = function(arr) {
console.log("The evenIndexed elements in the given array:");
for(i=0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
     console.log(arr.indexOf(arr[i]));
    }
}
}
evenIndex([10,21,22,23,25]);
