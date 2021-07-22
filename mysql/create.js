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
    var tabledata="CREATE TABLE people2(name VARCHAR(255),vaccinated VARCHAR(20))";
    
    //DATABASE CREATION
    //  con.query("CREATE DATABASE Vaccin",(err,resp)=>{
    //     if(err)throw err;
    //     console.log("connected db")
    //  })
     con.query(tabledata,(err,resp)=>{
         if(err)throw err;
         console.log("table created")
     })
})