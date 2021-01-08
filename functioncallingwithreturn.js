function f1()
{
    var x=0;
    x=f2();
    x++
    console.log(x);
}
function f2()
{
    var x=0;
   x=f3();
    x++
    console.log(x);
return x ;
}
    function f3()
    {
        var x=0;
        x++
        console.log(x);
    return x;
    }

    f1();

