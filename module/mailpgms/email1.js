
var nodemailer=require("nodemailer");
var transport=nodemailer.createTransport({service:'gmail',
                                         auth:
                                        {
                                            user:'ygopalkrishnaa@gmail.com',
                                            pass:'***********',
                                        }});

var mailOptions={
            from:'ygopalkrishnaa@gmail.com',
            to:'ygopalkrishnaa@gmail.com',
            sub:'sending email using node js',
            text:'this is my first real world appln here we can lern how to use third party npm nodemailar and send mail to my account',

              }
              transport.sendMail(mailOptions,function(error,info){
                  if(error){console.log(error)};
                  
                  
                      console.log('email sent'+info.reponse);
                
              });