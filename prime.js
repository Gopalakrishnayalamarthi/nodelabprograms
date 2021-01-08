function display(arr) {
    for(var i=0;i<arr.length;i++)
    {
        var value=arr[i];
        if(isprime(value))
        {
            console.log(value,"is prime");

        }
    }
    
}
display([10,9,5,7,11,13,17,25,2,89,76]);


function isprime(n)
{
    var count=0;
    for(var i=1;i<=n;i++)
    {
       if(n%i==0)
          {
            count++;
            if(count>2)
            {
                break;
            }
        }
    }
            if(count==2)
            {
            
                return true;

            }
            
        
    
}