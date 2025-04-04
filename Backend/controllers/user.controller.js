const User = require('../models/user.models')
const userService = require('../services/user.services')
const {validationResult} = require('express-validator')

module.exports.registerUser = async (req, res, next)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname, email, password} = req.body
    const hashedPassword = await User.hashPassword(password)

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    })
    const token = User.generateAuthToken()
  

    res.status(201).json({token, user})

}