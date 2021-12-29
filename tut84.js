// show dbs
// use asifkart
// show collections se asifkart

//to make another collection :
// db.anotherCollection.insert({name:"asif"})
// db.anotherCollection.find()

// to make another database 
// use newDB 
// show newDB
// use newDB

//now insert new items 

// now update 
// only update first even many records are available 
db.items.updateOne({ name: "huawei 30s" }, { $set: { price: 4 } })
db.items.find()

// update all records in collection  
db.items.updateMany({ name: "Tecno" }, { $set: { price: 5, rating: 1 } })
db.items.find()