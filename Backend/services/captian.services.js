const Captain = require('../models/captian.models')
module.exports.createCaptain = async({firstname, lastname,email, password ,plate , color ,capacity ,vehicleType})=>{
    
    if(!firstname || !lastname || !email || !password  || !plate || !color || !capacity || !vehicleType){
        throw new Error("Please fill all the fields")
    }
    const captain = Captain.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            plate,
            color,
            capacity,
            vehicleType
        }
    })
    return captain
}