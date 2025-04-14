const { compare } = require('bcrypt')
const Captain = require('../models/captian.models')
const captainServices = require('../services/captian.services')
const {validationResult} =  require('express-validator')
const blacklistToken = require('../models/blacklistToken')

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

module.exports.loginCaptain = async(req, res, next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        throw new Error(errors.array())
    }

    const {email, password}= req.body

    const captain = await Captain.findOne({email}).select('+password')

    if(!captain){
        res.status(401).json({message:"Please provide a valid email and password"})
    }

    const isMatch = await captain.comparePassword(password)

    if(!isMatch){
        res.status(401).json({message:"Please provide a valid email and password"})
    }

    const token = await captain.generateAuthToken()
    
    res.cookie('token', token)

    res.status(200).json({token, captain})
}

module.exports.getProfile = async(req, res, next)=>{
    res.status(200).json({captian:req.captian})
}

module.exports.getLogout = async(req, res, next)=>{
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token

    await blacklistToken.create({token})
    res.clearCookie('token')

    res.status(200).json({message:"Logout succesful"})
}