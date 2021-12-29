// Syncronous Or blocking
// Line by line execution
// Asyncronous or non blocking
// Line by line execution is not guarntee
// call back will fire 
const fs=require("fs");
fs.readFile("delete.txt","utf-8",(err,data)=>{
console.log(data);
});
console.log("This is a message");