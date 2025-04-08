const express = require('express')
const {body} = require('express-validator')
const captainController = require('../controllers/captain.controller')
const Router = express.Router()

Router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname should atleast be 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be 3 characters long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1 '),
], captainController.registerCaptain)

module.exports = Router