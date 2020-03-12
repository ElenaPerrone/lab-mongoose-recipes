const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef","UltraPro Chef"]
  },
  ingredients: Array,
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    enum: ["Breakfast" ,"Dish" ,"Snack" ,"Drink" ,"Dessert" ,"Other"]
  },
  image_url: {
    type: String,
    default: 'https://github.com/ElenaPerrone/lab-mongoose-recipes.git'
  },
  duration: Number,
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe

