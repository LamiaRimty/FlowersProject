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

const insectSchema = new mongoose.Schema({
    name:String,
    legs: Number

});

const Insect = mongoose.model("Insect",insectSchema);
const insect = new Insect({
    name:"Butterfly",
    legs:6
});

//insect.save();

// Flower.deleteOne({ _id:"638f41d00b03cde038886a7f" },function(error){
 
//     if(error){
//       console.log(error);
//     }
  
//     else{
//       console.log("Successfully deleted Flower in the document");
//     }
//   })