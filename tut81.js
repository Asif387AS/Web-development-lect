//mongodb  is the main process of database  or we can say it is a server 
//mongo is a shell which is used to connect to the mongod which handle all the process of database
// alternative of mongo mongoDB compass 
//mongoose is used in node.js it is used to establish connection between node.js and mongoBD or we can say that it is interface between mongosDB and node js 

//inserting the data into the mongo db
// use asifkart
db.items.insertMany({ name: "Samsung 30s", price: 333, rating: 3.5, qty: 233, sold: 98 })


db.items.insertMany([{ name: "Samsung 30s", price: 333, rating: 3.5, qty: 233, sold: 98 }, { name: "Tecno", price: 3333, rating: 1.5, qty: 233, sold: 98 }, { name: "vivo", price: 5356, rating: 4.5, qty: 2633, sold: 98 }, { name: "Shabo", price: 333, rating: 3.5, qty: 233, sold: 98 }])