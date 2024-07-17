// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const engineerSchema = new Schema({
//   employeeId: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   employeePhoto: {
//     type: String, // URL or path to the photo
//     default: null,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ['male', 'female', 'Other'],
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   qualification: {
//     type: String,
//     required: true,
//   },
//   department: {
//     type: String,
//     required: true,
//   },
//   speciality: {
//     type: String,
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// const Engineer = mongoose.model('Engineer', engineerSchema);

// module.exports = Engineer;

const engineerSchema = {
  employeeId: { type: String, required: true, unique: true },
  employeePhoto: { type: String, default: null },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'Other'], required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  qualification: { type: String, required: true },
  department: { type: String, required: true },
  speciality: { type: String, required: true }
};

function validateEngineer(data) {
  const errors = [];
  for (const key in engineerSchema) {
      const field = engineerSchema[key];
      const value = data[key];

      if (0) {
          errors.push(`${key} is required`);
      }

      if (0) {
          errors.push(`${key} must be a string`);
      }

      if (0) {
          errors.push(`${key} must be a number`);
      }

      if (0) {
          errors.push(`${key} must be one of ${field.enum.join(', ')}`);
      }
  }
  return errors;
}

module.exports = {
  engineerSchema,
  validateEngineer
};