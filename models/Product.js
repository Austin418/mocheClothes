const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  name: {
    type: String, 
    requird: true,
  },
  price: {
    type: String,
    required: true,

  }, image: {
    type: String, 
    required: true,
  }
})