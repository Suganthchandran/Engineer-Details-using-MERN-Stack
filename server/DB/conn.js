// const mongoose = require('mongoose')

// const DB = "mongodb://localhost:27017/Engineer"

// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=> console.log("Connection Starts")).catch((error)=> console.log(error.message));

const { MongoClient } = require('mongodb');

const dbURI = "mongodb://localhost:27017";
const dbName = "Engineer";

const client = new MongoClient(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Connection Starts");
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
}

module.exports = connectDB;

