var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017";

MongoClient.connect(url,(err,db)=>{

    if(err)throw err;
    var dbo=db.db("fruites");
    var obj={name:"banana",price:"kg 30"}

    dbo.collection("bananas").insertOne(obj,(err,res)=>{

        if(err)throw err;
        console.log("banana is created")
        db.close();
    })

})