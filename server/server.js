require('dotenv').config();
const express = require('express')
const cors = require('cors')
const PORT = 5000;
require('./DB/conn')
const Engineer = require('./Models/engineerSchema')
const router = require('./routes/router')

const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
})