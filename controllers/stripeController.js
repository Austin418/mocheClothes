<<<<<<< HEAD
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPW_KEY)

const stripeController = async (req, res) => {
  const {purchase, total_amount, shipping_fee} = req.body

  const calcTotal = () => {
    return total_amount + shipping_fee
  }


  const paymentIntent = await stripe.paymentIntent.create({
    amount: calcTotal(),
    currency: "usd",
  })
  res.json({clientSecret: paymentIntent.client_secret})
}
=======
require("dotenv").config();
const stripeController = require('stripe')(process.env.STRIPE_KEY)

const stripeController = async (req, res) => {
    const {purchase, total_amount, shipping_fee} = req.body
}

const calcTotal = () => {
    return total_amount + shipping_fee
}

const paymentIntent = await stripe.paymentIntent.create({
    amount: calcTotal(),
    currency: "usd",
})

res.json({clientSecret: paymentIntent.client_secret})
>>>>>>> 101fc0562519e7163524af73b5554cca88337ba0

module.exports = stripeController