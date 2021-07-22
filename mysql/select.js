
var mysql=require('mysql');
var q=require('./quries/myquries.js')
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"vaccin"
})
con.connect((err)=>{
if(err)throw err;

con.query(q,(err,resp)=>{

    if(err)throw err;
    console.log(resp)
})
})