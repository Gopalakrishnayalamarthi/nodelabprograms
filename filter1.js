
  var students=[         
                 {
                 "id":1,
                 "name":"ravi",
                  "marks":99
                  },
                  {
                    "id":101,
                    "name":"raju",
                     "marks":89
                     },
                     {
                        "id":201,
                        "name":"ravan",
                         "marks":91
                         }
                           
                ];
function f(students) {
                         var n=[];
                     for(var index=0;index<students.length;index++)
                     {
                         var str=students[index];
                     
                     }
                     //if(str.marks>60 && str.marks<95)
                     //{
                       // n.push(str);
                     
                     for(var i=0;i<str.length;i++)
                     {
                         for(var j=i+1;j<str.length;j++)
                         {
                             if(str[i].marks>str[j].marks)
                             {
                                 var temp=str[i];
                                 str[i]=str[j];
                                 str[j]=temp;
                                 
                             }
                          }
                         
                        }      
                     return str;
            
                    }

                var f1=f(students);
                console.log(f1);