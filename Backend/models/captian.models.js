const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captianSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3, "Firstname should be atleast 3 characters long"]
        },
        lastname:{
            type:String,
            minLength:[3, "Lastname should be atleast 3 characters long"]
        }
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        type:String,
        required:true,
        minLength:[6, 'Password must be 6 characters long'],
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3, "Color must be 3 characters long"]
        },
        plate:{
            type:String,
            required:true,
            minLength:[3, "Plate must be 3 characters long"]
        },
        capacity:{
            type:Number,
            required:true,
            minLength:[1, "There must be capacity of atleast one person"]
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car', 'auto', 'motorcycle'],
            default:'car'

        }

    },
    location:{
        ltd:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
})

captianSchema.methods.generateAuthToken = async()=>{
    const token = await jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn:'24h'})
    return token
}

captianSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

captianSchema.statics.hashPassword = async(password)=>{
    return await bcrypt.hash(password, 10)
}

const Captain = mongoose.model('captain', captianSchema)
module.exports = Captain