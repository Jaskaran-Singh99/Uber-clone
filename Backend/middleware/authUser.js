const User = require('../models/user.models')

const jwt = require('jsonwebtoken')

module.exports.authUser = async (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    console.log(token)

    if(!token){
        return res.status(401).json({message:"Token does not exist"})
    }
    
    const isBlacklistedToken = await User.findOne({token:token})

    if(isBlacklistedToken){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded._id)

        req.user = user
        
        return next()
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized Token due to"})
    }

}