//Searching the data into the mongo db
// use asifkart
// This will return all the objects with rating equal and greater than 3.5
db.items.find({ rating: 3.5 })
db.items.find({ rating: { $gt: 3.5 } })
db.items.find({ rating: { $gte: 3.5 } })
    // And Operator 
db.items.find({ rating: { $gte: 3.5 }, price: { $gt: 333 } })
db.items.find({ rating: { $lt: 3.5 }, price: { $gt: 333 } })

//OR operator 
db.items.find({ $or: [{ rating: { $lt: 3.5 }, price: { $gt: 333 } }] })


//Third parameter will show only those vlaue which are montioned 
db.items.find({ rating: 3.5 }, { rating: 1 })
db.items.find({ rating: 3.5 }, { rating: 1, qty: 1 })