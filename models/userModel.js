const mongoose = require('mongoose');
//schema design
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"name is required"],
    },
    email :{
        type : String,
        required : [true,"email is required"],
        unique : true,
    },
    password : {
        type : String,a
        required : [true,"password is required"],
    },

},
{timestamps : true});

const userModel = mongoose.model('users' , userSchema);  
//export
module.exports = userModel;
