const fs=require('fs');
//creating a folder
//fs.mkdirSync("pizza")

//creating
//fs.writeFileSync("pizza/eat.txt","i want eat pizza in evening")

//editing file
//fs.appendFileSync("pizza/eat.txt","...prinka want's dosa in the morning")

//reading the data
// var data=fs.readFileSync("pizza/eat.txt");
// console.log(data)
// var data1=fs.readFileSync("pizza/eat.txt","utf-8");
// console.log(data1)


//renaming file
//fs.renameSync("pizza/eat.txt","pizza/eating-plan.txt")

//delite file
//fs.unlinkSync("pizza/g.txt");

fs.rmdirSync("h");