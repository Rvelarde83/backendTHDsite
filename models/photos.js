// Model
const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    title: String,
    image: String,

});


const Photos = mongoose.model("Photos", PhotosSchema);

module.exports = Photos