// show dbs
// use asifkart
// show collections se asifkart 
db.items.find({ price: 333 })
    // Deleting the data into mongodb 
db.items.deleteOne({ price: 5356 })
    //deleteOne will delete first element in multiple element documents 
db.items.deleteMany({ price: 333 })