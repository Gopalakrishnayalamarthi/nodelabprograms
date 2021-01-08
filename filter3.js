var students=[
    {
        "id":101,
        "name":"gk",
        "marks":67
    },
    {
        "id":102,
        "name":"kkk",
        "marks":98
    },
    {
        "id":101,
        "name":"gk",
        "marks":77
    }
];
//var stu=students.filter(element=>element.marks>90);
var stu=students.filter(element=>(element.marks>60)&&(element.marks<90));
var map1=stu.map(x=>x*2);
console.log(map1);
console.log(stu);