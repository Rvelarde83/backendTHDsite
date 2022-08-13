// Model
const mongoose = require("mongoose");

const BandmatesSchema = new mongoose.Schema({
    name: String,
    image: String,
    intrument: String,
    notes:String,

});


const Bandmates = mongoose.model("Bandmates", BandmatesSchema);

module.exports = Bandmates