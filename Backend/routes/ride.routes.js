const express = require('express')
const Router = express.Router()
const {body, query} = require('express-validator')
const rideController = require('../controllers/ride.controller')
const authUser= require('../middleware/authUser')
const {authCaptain} = require('../middleware/authUser')


Router.post('/create',
    authUser.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
    rideController.createRide
)


Router.get('/getfare', 
    authUser.authUser,
    query('pickup').isString().isLength({min:2}).withMessage('Invalid pickup location'),
    query('destination').isString().isLength({min:2}).withMessage('Invalid destination '),
    rideController.getFare
)


Router.post('/confirm',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

Router.get('/start-ride',
    authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

Router.post('/end-ride',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)



module.exports = Router