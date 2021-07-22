var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"vaccin"
})
con.connect((err)=>{
if(err)throw err;

var q="DELETE FROM people2 WHERE id=4";

con.query(q,(err,resp)=>{

    if(err)throw err;
    console.log(resp)
    console.log("record got delited"+resp.affectedRows);
})
})