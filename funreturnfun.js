function f1()
{
    console.log("function in side a return function exampele code");
    return function(x,y)
    {
        return x*y;
    }
}
//var r1=f1();
//var r2=r1(10,20);
var r=f1()(10,50);
console.log(r);