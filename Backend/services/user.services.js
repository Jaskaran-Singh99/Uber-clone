const User = require('../models/user.models')

module.exports.createUser = async ({firstname,lastname, password, email})=>{
    if(!firstname || !password || !email){
        throw new Error("All Fields are Required")
    }
    else{
        const user = User.create({fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user
    }
}

