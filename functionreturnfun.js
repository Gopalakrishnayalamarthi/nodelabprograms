function f3()
{
    console.log("function with return function");
    return function()
    {
        console.log("this program having function with retun");
    }
}
//f3()();
var z=f3();
z();