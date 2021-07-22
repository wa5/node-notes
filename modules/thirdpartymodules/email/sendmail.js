


var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
service:'gmail',
auth:{
    user:'waseemahmed116@gmail.com',
  
}


});

var mailOptions={
from:'waseemahmed116@gmail.com',
to:'shaikumera81@gmail.com',
subject:'umera break fast Dosa ',
text:'hi umera ur dosa will be ready with in one hour'


};

transporter.sendMail(mailOptions,(error,info)=>{

    if(error){
        console.log(error)
    }else{
        console.log("email sent sucesfully",+info.response)
    }

});


