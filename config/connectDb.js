const mongoose = require('mongoose');
const color = require('colors');
const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`server Running on ${mongoose.connection.host}`.bgCyan.white);
    }
    catch(error){
        console.log(`${error}`.bgRed);
    }
}
module.exports = connectDb;