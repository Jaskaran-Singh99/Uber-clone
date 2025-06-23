const axios = require('axios');
// const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.MAPS_API_KEY;
    console.log(apiKey )
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination)=>{
    if(!origin || !destination){
        throw new Error('Please Provide Origin and Destination')
    }

    const apiKey = process.env.MAPS_API_KEY
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?origin=${origin}&key=${apiKey}`;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;


    try{
        const response = await axios.get(url)

        if(response.data.status === 'OK'){
            if(response.data.rows[ 0 ].elements[ 0 ].status === "ZERO_RESULTS"){
                throw new Error('No Routes Found')
            }
            return response.data.rows[ 0 ].elements[ 0 ]
        }
        else{
            throw new Error('Unable to fetch the distance and time')
        }
        
    }
    catch(err){
        console.error(err)
        throw err
    }
}

module.exports.getAutocompleteSuggestions = async(input)=>{
     if(!input){
        throw new Error('Query is reqiured')
    }

    const apiKey = process.env.MAPS_API_KEY
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    
    try{
        const response = await axios.get(url)
        if(response.data.status === "OK"){
            return response.data.predictions
        }
        else{
            throw new Error('Unable to fetch suggestions')
        }
    }
    catch(err){
        console.log(err)
        throw  err
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km


    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;


}
 