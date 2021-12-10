require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()


const notFoundError = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const stripeController = require('./controllers/stripeController')

const port = process.env.PORT || 3000

app.use(express.json())
app.use(fileUpload({useTempFiles: true}))
app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.send('<h1>Stripe payment Starter</h1>')
})
app.post("/stripe", stripeController)

// app.use('notFoundError')
// app.use('errorHandlerMiddleware')

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log('listening @ ' + port))
  }catch(error){
    console.log(error);
  }
}

start()