function arrayswap(a1,a2)
    {
        if(a1.length<a2.length)
        {
            for(var i=0;i<a1.length-1;i++)
            {

            
            var temp=a1[i]
            a1[i]=a2[i]
            a2[i]=temp
            }
            console.log("after swaping array a1 is",a1)
            console.log("after swaping array a1 is",a2)
        }
        else
        {
            for(var i=0;i<a2.length-2;i++)
            {

            
            var temp=a1[i]
            a1[i]=a2[i]
            a2[i]=temp
            }
            console.log("after swaping array a1 is",a1)
            console.log("after swaping array a1 is",a2)
        }
        
    }
   
    arrayswap(a1=[22,11,33,44,77,78,98],a2=[55,66,77,99,100])