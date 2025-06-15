const { validationResult } = require('express-validator')
const rideService = require('../services/ride.services')



const createRide = async (req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {pickup ,destination, vehicleType} = req.body
    try{
        
        const ride = await rideService.createRide({user:req.user._id, vehicleType, pickup, destination})
        return  res.status(201).json(ride)
        // ride.otp = ""
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {createRide, getFare}