var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/"

MongoClient.connect(url,(err,db)=>{
if(err) throw err;
var dba=db.db("briyani");
dba.createCollection("customers",(err,res)=>{

    if(err)throw err;
    console.log("collection created");
    db.close();
})

})