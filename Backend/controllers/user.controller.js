const User = require('../models/user.models')
const userService = require('../services/user.services')
const {validationResult} = require('express-validator')
const blacklistTokenSchema = require('../models/blacklistToken')

module.exports.registerUser = async (req, res, next)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname, email, password} = req.body
    const doesUserExist = await User.findOne({email})

    if(doesUserExist){
        res.status(400).json({message:"A user already exists with that email"})
    }
    const hashedPassword = await User.hashPassword(password)

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    })
    const token = user.generateAuthToken()
    
  

    res.status(201).json({token, user})

}

module.exports.loginUser = async (req, res, next)=>{
    const errors = validationResult(req.body)

    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    
    const {email, password} = req.body

    const user = await User.findOne({email}).select('+password')

    if(!user){
        res.status(401).json({message:'Incorrect email or password'})
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        res.status(401).json({message:"Incorrect email or password" })
    }
    
    const token = user.generateAuthToken()
    res.cookie('token', token)
    res.status(200).json({user, token})
}  

module.exports.getUserProfile = async(req, res, next)=>{
    console.log(req.user)
    res.status(200).json(req.user)
}

module.exports.logoutUser = async(req, res, next)=>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]

    await blacklistTokenSchema.create({token})
   
    res.status(200).json({message:'User logged out'})
}