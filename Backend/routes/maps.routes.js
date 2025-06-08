const express = require("express")
const Router = express.Router()
const {authUser} = require('../middleware/authUser')
const mapsRoutes = require('../controllers/map.controller')
const {query} = require('express-validator')


Router.get('/coordinate', 
    query('address').isString().isLength({min:3}),
    authUser,
    mapsRoutes.getCoordinates
)

Router.get('/distancetime',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authUser,
    mapsRoutes.getDistanceTime
)

Router.get('/suggestions', 
    query('input').isString().isLength({min:3}),
    authUser,
    mapsRoutes.getAutocompleteSuggestions
)
module.exports = Router