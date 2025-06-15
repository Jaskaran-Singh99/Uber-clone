const User = require('../models/user.models')
const blackListTokenModel = require('../models/blacklistToken')
const jwt = require('jsonwebtoken')

module.exports.authUser = async (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    

    if(!token){ 
        return res.status(401).json({message:"Token does not exist"})
    }
    
    const isBlacklistedToken = await blackListTokenModel.findOne({token:token})

    if(isBlacklistedToken){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        const user = await User.findById(decoded._id)

        req.user = user
        
        return next()
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized Token due to" + err})
    }

}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}