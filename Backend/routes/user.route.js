// const User = require('../models/user.models')
const express = require('express')
const {body} = require('express-validator')
const Router = express.Router()
const userController = require('../controllers/user.controller')

Router.post('/register', [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 letters long')

],
userController.registerUser
)

module.exports = Router
