const mongoose = require('mongoose')
const MONGO_URI = process.env.URI
// console.log(URI)

const connectDb = ()=>{
    mongoose.connect(MONGO_URI).then(()=>{
        console.log("Connected to Database")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb