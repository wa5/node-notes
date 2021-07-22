var mysql=require('mysql');
var con=mysql.createConnection({

host:"localhost",
user:"root",
password:"",
database:"Vaccin"
})

con.connect((err)=>{
    if(err)throw err;
    console.log("connected")
    //var tabledata="CREATE TABLE people2(name VARCHAR(255),vaccinated VARCHAR(20))";
    var  insertdata="INSERT INTO `people2`(`name`, `vaccinated`) VALUES ('bharth','no'),('umera','no'),('pavan','yes')"
   
     con.query(insertdata,(err,resp)=>{
         if(err)throw err;
         console.log("table data got inserted")
     })
})