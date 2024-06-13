const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const engineerSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  employeePhoto: {
    type: String, // URL or path to the photo
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Engineer = mongoose.model('Engineer', engineerSchema);

module.exports = Engineer;