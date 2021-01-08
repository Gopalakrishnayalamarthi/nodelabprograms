function f1(x,y)
{
    console.log("this program to test fnction having functions as aruguments");
    x();//x(10,20);
    y();
    console.log("functions after passing functions as aruguments");
}
f1(function(){console.log("onf1functi")},function(){console.log("onfunction f2")});
//var a=function(){console.log("onf1functi")};//function(a,b){console.log("onf1functi"),a,b},
//var b=function(){console.log("onf2functi")};
//f1(a,b);