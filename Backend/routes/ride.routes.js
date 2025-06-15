const express = require('express')
const Router = express.Router()
const {body, query} = require('express-validator')
const rideController = require('../controllers/ride.controller')
const authUser= require('../middleware/authUser')


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


module.exports = Router