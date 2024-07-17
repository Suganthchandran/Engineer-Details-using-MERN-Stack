// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const PORT = 5000;
// require('./DB/conn');
// const Engineer = require('./Models/engineerSchema');
// const router = require('./routes/router');

// const app = express();

// // Middleware
// app.use('/images', express.static(path.join(__dirname, 'uploads')));
// app.use(cors());
// app.use(express.json());
// app.use(router);

// app.listen(PORT, () => {
//     console.log(`Server Running on ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 5000;
const router = require('./routes/router');

const app = express();

app.use('/images', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});

  
