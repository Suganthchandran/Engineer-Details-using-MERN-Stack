// const express = require('express');
// const users = require("../Models/engineerSchema");
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); 
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); 
//     }
// });

// const upload = multer({ storage: storage });

// const fs = require('fs');
// const uploadDir = 'uploads';
// if (!fs.existsSync(uploadDir)){
//     fs.mkdirSync(uploadDir);
// }

// router.post("/add-data", upload.single('employeePhoto'), async (req, res) => {
//     console.log("Called ");
//     const { employeeId, name, age, gender, phone, email, qualification, department, speciality } = req.body;
//     const employeePhoto = req.file ? req.file.path : null;

//     if (!employeeId || !employeePhoto || !name || !age || !gender || !phone || !email || !qualification || !department || !speciality) {
//         res.status(404).send("Please Fill All the Data");
//         return;
//     }

//     try {
//         const preuser = await users.findOne({ employeeId: employeeId });
//         console.log(preuser);

//         if (preuser) {
//             res.status(404).send("This Employee is Already Added");
//         } else {
//             const addeng = new users({ employeeId, employeePhoto, name, age, gender, phone, email, qualification, department, speciality });
//             await addeng.save();
//             res.status(201).json();
//             console.log(addeng);
//         }
//     } catch (error) {
//         res.status(404).send(error);
//     }
// });

// router.get("/getdata",async(req,res)=>{
//     try{
//         const userdata = await users.find();
//         res.status(201).json(userdata)
//         console.log(userdata)
//     }
//     catch(error)
//     {
//         res.status(404).json(error)
//     }
// }) 

// router.get('/getuser/:id',async(req,res)=>{
//     try{
//         console.log(req.params)
//         const {id} = req.params;
//         const individual = await users.findById({_id:id});
//         console.log(individual)
//         res.status(201).json(individual)
//     }
//     catch(error)
//     {
//         res.status(404).json(error)
//     }
// })


// router.patch("/updateuser/:id", upload.single('employeePhoto'), async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { employeeId, name, age, gender, phone, email, qualification, department, speciality } = req.body;
//         const employeePhoto = req.file ? req.file.path : null;

//         const updatedFields = { employeeId, name, age, gender, phone, email, qualification, department, speciality };
        
//         if (employeePhoto) {
//             updatedFields.employeePhoto = employeePhoto;
//         }

//         Object.keys(updatedFields).forEach(key => updatedFields[key] === undefined && delete updatedFields[key]);

//         const updateuser = await users.findByIdAndUpdate(id, updatedFields, {
//             new: true
//         });

//         console.log(updateuser);
//         res.status(201).json(updateuser);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// });

// router.delete("/deleteuser/:id", async (req, res) => {
//     try {
//         console.log("Delete Request ID:", req.params.id);  
//         const { id } = req.params;
//         const deleteuser = await users.findByIdAndDelete({ _id: id });
//         console.log(deleteuser);
//         res.status(201).json(deleteuser);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// });


// router.get('/search', async (req, res) => {
//     try {
//         const { query } = req.query;
//         const searchQuery = new RegExp(query, 'i'); 
//         const searchResults = await users.find({ speciality: searchQuery });
//         return res.status(200).json(searchResults);
//     } catch (error) {
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });





// module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const connectDB = require('../DB/conn');
const { validateEngineer } = require('../Models/engineerSchema');
const { ObjectId } = require('mongodb');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

router.post("/add-data", upload.single('employeePhoto'), async (req, res) => {
    const db = await connectDB();
    const { employeeId, name, age, gender, phone, email, qualification, department, speciality } = req.body;
    const employeePhoto = req.file ? req.file.path : null;

    if (!employeeId || !name || !age || !gender || !phone || !email || !qualification || !department || !speciality) {
        return res.status(404).send("Please Fill All the Data");
    }

    const errors = validateEngineer({ employeeId, employeePhoto, name, age, gender, phone, email, qualification, department, speciality });

    if (errors.length > 0) {
        return res.status(400).send(errors.join(', '));
    }

    try {
        const preuser = await db.collection('engineers').findOne({ employeeId: employeeId });
        if (preuser) {
            return res.status(404).send("This Employee is Already Added");
        } else {
            const addeng = {
                employeeId, employeePhoto, name, age, gender, phone, email, qualification, department, speciality,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            await db.collection('engineers').insertOne(addeng);
            res.status(201).json();
        }
    } catch (error) {
        res.status(404).send(error);
    }
});

router.get("/getdata", async (req, res) => {
    const db = await connectDB();
    try {
        const userdata = await db.collection('engineers').find().toArray();
        res.status(201).json(userdata);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.get('/getuser/:id', async (req, res) => {
    const db = await connectDB();
    try {
        const { id } = req.params;
        const individual = await db.collection('engineers').findOne({ _id: new ObjectId(id) });
        res.status(201).json(individual);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.patch("/updateuser/:id", upload.single('employeePhoto'), async (req, res) => {
    const db = await connectDB();
    try {
        const { id } = req.params;
        const { employeeId, name, age, gender, phone, email, qualification, department, speciality } = req.body;
        const employeePhoto = req.file ? req.file.path : null;

        const updatedFields = { employeeId, name, age, gender, phone, email, qualification, department, speciality, updatedAt: new Date() };
       
        if (employeePhoto) {
            updatedFields.employeePhoto = employeePhoto;
        }

        Object.keys(updatedFields).forEach(key => updatedFields[key] === undefined && delete updatedFields[key]);

        const updateuser = await db.collection('engineers').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updatedFields },
            { returnDocument: 'after' }
        );

        res.status(201).json(updateuser.value);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete("/deleteuser/:id", async (req, res) => {
    const db = await connectDB();
    try {
        const { id } = req.params;
        const deleteuser = await db.collection('engineers').deleteOne({ _id: new ObjectId(id) });
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.get('/search', async (req, res) => {
    const db = await connectDB();
    try {
        const { query } = req.query;
        const searchQuery = new RegExp(query, 'i');
        const searchResults = await db.collection('engineers').find({ speciality: searchQuery }).toArray();
        res.status(200).json(searchResults);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
