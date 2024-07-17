
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/Engineer';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

function getDatabase() {
    return client.db(); // return the connected database instance
}

module.exports = { connectToDatabase, getDatabase };