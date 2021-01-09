function duplicate(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
               y=arr[i];
               console.log("Duplicate Number is",y);
            }
       }
   }
}
duplicate([1,1,2,2,3,3,4,4,5,6]);