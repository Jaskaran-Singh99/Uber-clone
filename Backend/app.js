const express = require('express')

// Dotenv 
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.get('/', (req, res)=>{
    res.json('Hello world')
})

module.exports = app