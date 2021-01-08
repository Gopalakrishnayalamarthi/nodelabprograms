function f1(){
    var x=0;
    f2();
    x++
    console.log(x);
}
function f2(){
    var x=0;
    f3();
    x++
    console.log(x);
}
    function f3(){
        var x=0;
        
        x++
        console.log(x);
    
    }

    f1();

