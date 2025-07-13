const mongoose = require('mongoose')

const rideSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    captain:{
        type:mongoose.Schema.ObjectId,
        ref:'Captain',
    },
    pickup:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    fare:{
        type:Number,
        required:true,
    },
    duration:{
        type:Number
    },
    distance:{
        type:Number
    }
    ,
    status:{
        type:String,
        enum:['pending', 'ongoing', 'accepted','completed', 'cancelled'],
        default:'pending'
    },
    paymentID:{
        type:String
    },
    orderId:{
        type:String
    },
    signature:{
        type:String
    },
    otp:{
        type:String,
        select:false,
        required:false
    }
})

module.exports = mongoose.model('ride', rideSchema)