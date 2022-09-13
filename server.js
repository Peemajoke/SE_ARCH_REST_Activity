const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const restaurants = require('./routes/restaurants')

dotenv.config({path:'./config/.env'})
connectDB()

const app = express()

app.use(express.json())
app.use('/api/v1/restaurants', restaurants)

app.use('/healthz', (req, res) => {
    res.status(200).json({ success: true, message: "You're Healthz."})
})

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT))

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(() => process.exit(1));
})