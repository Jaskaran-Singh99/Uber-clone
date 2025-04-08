const Captain = require('../models/captian.models')
const captainServices = require('../services/captian.services')
const {validationResult} =  require('express-validator')

module.exports.registerCaptain  = async(req, res , next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    const {fullname, email, password , vehicle} = req.body
    
    const doesCaptianExist = await Captain.findOne({email})
    if(doesCaptianExist){
        res.status(400).json({message:"A user already exists with that email"})
    }
    const hashedPassword = await Captain.hashPassword(password)

    const captain = await captainServices.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email:email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        vehicleType:vehicle.vehicleType,
        capacity:vehicle.capacity
    })


    const token = await captain.generateAuthToken()
    
    res.status(201).json({token, captain})
}