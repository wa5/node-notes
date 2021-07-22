var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,(err,db)=>{

    if(err) throw err;
    var dbo=db.db("dairy");
var obj={name:"nandani",price:30,fresh:"yes",color:"white"}
//inserting
dbo.collection("milk").insertOne(obj,(err,resp)=>{
if(err)throw err;
console.log("dara inserted")

})
//finding it
    dbo.collection("milk").findOne({},(err,rest)=>{

        if(err)throw err;

        for(let x in rest){
            
            console.log(rest[x])
        }



        // console.log(rest.name)
        // console.log(rest.color)
        // console.log(rest)
        db.close();
    })

})
