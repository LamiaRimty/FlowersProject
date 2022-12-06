const { strict } = require('assert');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flowersDB');

const flowerSchema= new mongoose.Schema({
    name: String,
    rating:Number,
    review:String
});

const Flower = mongoose.model("Flower",flowerSchema);
const flower = new Flower({
    name: "Tulip",
    rating:8,
    review:"National flower of the Netherlands"
});

//flower.save();