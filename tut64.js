// how to add modules or files in nodesjs
console.log('THis lecture is about modules in JS');
const fs=require("fs");
let text=fs.readFileSync("asif.txt.txt","utf-8");
text=text.replace("Hassan","Husnain");
fs.writeFileSync("delete.txt",text);
console.log(text);
// console.log(text);