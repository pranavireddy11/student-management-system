const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  enrollmentYear: {
    type: Number,
    required: true,
    min: 2000,
    max: new Date().getFullYear()
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Student', StudentSchema);
