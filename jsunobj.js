var students=[{
              "id":1,
              "name":"gk",
              "mobile":[9492021898,9160369772],
              "pincode":534112,
              "city":"nallajerla",
              "state":"ap",
              },
              {"id":2,
              "name":"kk",
              "mobile":[9492021898,9160369772],
              "pincode":534112,
              "city":"nallajerla",
              "state":"ap",
              }];
              
              for(var index=0;index<students.length;index++)
              {
                  var st=students[index];
                  console.log(st.id);
                  for(var i=0;i<st.mobile.length;i++)
                    {
                        console.log(st.mobile[i]);
                    }
                    console.log(st.name);
                    console.log(st.pincode);
                    console.log(st.city);
                    console.log(st.city);
                    console.log(st.state);
              }