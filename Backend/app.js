const express = require('express')
const app = express()
// Dotenv 
const dotenv = require('dotenv')
dotenv.config()
const connectDb = require('./db/db')
//CORS 
const cors = require('cors')
app.use(cors())
//MongoDb connection

connectDb()


app.get('/', (req, res)=>{
    res.json('Hello world')
})

module.exports = app