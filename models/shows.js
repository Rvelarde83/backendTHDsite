// Model
const mongoose = require("mongoose");

const ShowsSchema = new mongoose.Schema({
    name: String,
    image: String,
    flyer: String, 
    price: String,
    location: String,
    timedate: String,
    message: String,
});


const Shows = mongoose.model("Shows", ShowsSchema);

module.exports = Shows