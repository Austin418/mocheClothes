require("dotenv").config()
require('express-async-errors')
const express = require("express")
const app = express()
const stripeController = require("./mocheClothes/controllers/stripeController")

cloudinary.config({ 
    cloud_name: 'west-mec-drip', 
    api_key: '287381639348565', 
    api_secret: 'Hw5SqGeKPKseFLuuBPGQdWFRrCA' 
  });

  const notFoundError = require('./mocheClothes/middleware/')