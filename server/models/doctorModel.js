const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: "{PATH} is required!",
    },
    gender: {
      type: String,
      required: "{PATH} is required!",
    },
    age: {
      type: Number,
      required: "{PATH} is required!",
    },
    heartRate: {
      type: String,
      required: "{PATH} is required!",
    },
    bp: {
      type: String,
      required: "{PATH} is required!",
    },
    o2: {
      type: String,
      required: "{PATH} is required!",
    },
    department: {
      type: String,
      required: "{PATH} is required",
    },
    diagnosis: {
      type: String,
      required: "{PATH} is required!",
    },
    explanation: {
      type: String,
      required: "{PATH} is required!",
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
