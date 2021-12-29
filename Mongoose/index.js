// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/asifkart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('We are connected bro!');

});
var kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function() {
    const greeting = "My name is" + this.name;
    console.log(greeting);
}

var kitten = mongoose.model('kitten', kittySchema);

const harryKitty = new Kitten({ name: 'harryKitty' });
const harryKitty1 = new Kitten({ name: 'harryKitty1' });
// console.log(harryKitty.name);
// harryKitty.speak();

harryKitty.save(function(err, harryKitty) {
    if (err) return console.error(err);
    // harryKitty.speak();
})

harryKitty1.save(function(err, k) {
    if (err) return console.error(err);
    // k.speak();
})

kitten.find({ name: "harrykitty" }, function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})