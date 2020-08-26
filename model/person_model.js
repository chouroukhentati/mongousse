let mongoose = require('mongoose')
let personType = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods : [{type:String}],

})
module.exports = mongoose.model('User', personType)