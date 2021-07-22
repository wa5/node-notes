var mysql=require('mysql');
var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"vaccin"
})
conn.connect((err)=>{
    if(err)throw err;
    var q="UPDATE people2   SET `name`='PRIYANKA',`vaccinated`='NO' WHERE id=5";
    conn.query(q,(err,resp)=>{
        if(err)throw err;
        console.log(resp.affectedRows+" :records got updated")
    })
})