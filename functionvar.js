
var  f1= function ()
     {
      var a=[10,20,30,40];
     console.log(a);

       }
      function f2(x)
       {
          console.log("function calling")
           x();
    }
      f2(f1);

