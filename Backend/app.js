const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const express = require('express')
const connectDb = require('./db/db')
const userRoutes = require('./routes/user.route')
const captainRoutes = require('./routes/captain.route')
const cookieParser = require('cookie-parser')
const app = express()

connectDb()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)




module.exports = app