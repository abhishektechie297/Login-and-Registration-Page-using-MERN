const mongoose = require ('mongoose')

const connectDB = async () =>{
    try{
    await mongoose.connect(`mongodb://localhost:27017/databse`);
    console.log("Connected to db");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;