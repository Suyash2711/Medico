const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: "{PATH} is required!",
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
