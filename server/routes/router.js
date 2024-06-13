const express = require('express');
const users = require("../Models/engineerSchema");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // 'uploads/' directory to save the files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with timestamp and original extension
    }
});

const upload = multer({ storage: storage });

// Ensure the 'uploads' directory exists
const fs = require('fs');
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

router.post("/add-data", upload.single('employeePhoto'), async (req, res) => {
    console.log("Called ");
    const { employeeId, name, age, gender, phone, email, qualification, department, speciality } = req.body;
    const employeePhoto = req.file ? req.file.path : null;

    if (!employeeId || !employeePhoto || !name || !age || !gender || !phone || !email || !qualification || !department || !speciality) {
        res.status(404).send("Please Fill All the Data");
        return;
    }

    try {
        const preuser = await users.findOne({ employeeId: employeeId });
        console.log(preuser);

        if (preuser) {
            res.status(404).send("This Employee is Already Added");
        } else {
            const addeng = new users({ employeeId, employeePhoto, name, age, gender, phone, email, qualification, department, speciality });
            await addeng.save();
            res.status(201).json();
            console.log(addeng);
        }
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;
