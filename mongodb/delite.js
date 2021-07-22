var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/"

MongoClient.connect(url,(err,db)=>{

    
    if(err) throw err;
    var dbo=db.db("fruites");
var obj={name:"banana"};
dbo.collection("bananas").deleteOne(obj,(err,resp)=>{
    if(err)throw err;
    console.log("one document delited");
    db.close();
})
})