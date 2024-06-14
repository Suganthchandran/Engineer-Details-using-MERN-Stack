const mongoose = require('mongoose')

const DB = "mongodb://localhost:27017/Engineer"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connection Starts")).catch((error)=> console.log(error.message));
