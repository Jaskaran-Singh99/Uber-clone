const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "PLease provide a name with atleast 3 letters"]
        },
        lastname: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        min:[6, "Password must be atleast 6 letter"],
        required: true,
        select:false
    },
    email: {
        unique: true,
        type: String,
        required: true
    },
    socketId: {
        type: String
    }
})

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}


// userSchema.statics.comparePassword = async function(password){
//     return await bcrypt.compare(password, this.password)
// }
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAuthToken = function(){
    const token =  jwt.sign({_id:this._id},  process.env.JWT_SECRET, {expiresIn:'24h'})
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User