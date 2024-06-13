const express = require('express');
const users = require("../Models/engineerSchema")
const router = express.Router();

// router.get("/",(req,res)=>{
//     console.log("Connect");
// });

router.post("/add-data",async(req,res)=>{
    // console.log(req.body);
    const {employeeId, employeePhoto, name, age, gender, phone, email, qualification, department, speciality} = req.body;
    if(!employeeId || employeePhoto===null || !name || !age || !gender || !phone || !email || !qualification || !department || !speciality)
    {
        res.status(404).send("Please Fill All the Data");
    }

    try{
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser)
        {
            res.status(404).send("This Employee is Already Added")
        }
        else
        {
            const addeng = new users({employeeId, employeePhoto, name, age, gender, phone, email, qualification, department, speciality});
            await addeng.save();
            res.status(201).json()
            console.log(addeng);
        }
    }
    catch(error)
    {
        res.status(404).send(error);
    }
})

module.exports = router;