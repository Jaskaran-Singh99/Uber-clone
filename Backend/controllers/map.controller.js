const mapService = require('../services/map.services')
const {validationResult} = require('express-validator')

const getCoordinates = async(req, res, next)=>{
  
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return  res.status(400).json({errors:errors.array()})
    }
    const {address} = req.query;
        
    try{
        const coordinates = await mapService.getAddressCoordinate(address)
        res.status(200).json(coordinates)
    }
    catch(err){
        res.status(404).json({message:"Coordinates not Found"})
    }  
}

const getDistanceTime = async(req, res, next)=>{
    try{
        const errors = validationResult(req)
         if(!errors.isEmpty()){
            return  res.status(400).json({errors:errors.array()})
         }

        const {origin, destination} = req.query
        const distanceTime = await mapService.getDistanceTime(origin, destination)
        
        res.status(200).json(distanceTime)
    }
    catch(err){
        console.log(err)
    }
   
}

const getAutocompleteSuggestions = async( req, res , next)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {input} = req.query

        const suggestions = await mapService.getAutocompleteSuggestions(input)

        res.status(200).json(suggestions)
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:"Internal server error"})

    }
}

module.exports = {getCoordinates, getDistanceTime, getAutocompleteSuggestions}