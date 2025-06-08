const { validationResult } = require('express-validator')
const rideService = require('../services/ride.services')
const crypto = require('crypto')


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

const createRide = async (req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {pickup ,destination, vehicleType} = req.body
    try{
        
        const ride = await rideService.createRide({user:req.user._id, vehicleType, pickup, destination})
        return  res.status(201).json(ride)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


module.exports = {createRide}