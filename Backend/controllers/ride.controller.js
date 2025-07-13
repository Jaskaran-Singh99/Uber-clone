const { validationResult } = require('express-validator')
const rideService = require('../services/ride.services')
const {sendMessageToSocketId}  = require('../socket')
const mapService  = require('../services/map.services')
const rideSchema =require('../models/ride.models')




const createRide = async (req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {  pickup ,destination, vehicleType} = req.body
    try{

        const ride = await rideService.createRide({user:req.user._id, vehicleType, pickup, destination})
        res.status(201).json(ride)
         const pickupCoordinates = await mapService.getAddressCoordinate(pickup);



        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);
        // console.log(captainsInRadius)
          ride.otp = ""
        
        const rideWithUser = await rideSchema.findOne({ _id: ride._id }).populate('user');

      
          captainsInRadius.map(captain => {

            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser
                // data:ride
            })

        })
    }
    catch(err){
        console.log(err)
        // res.status(500).json({message:err.message})
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

const confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

const startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

        console.log(ride);

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.endRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })



        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    } 
}

module.exports = {createRide, getFare, confirmRide, startRide, endRide}