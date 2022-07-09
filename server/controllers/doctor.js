const Doctor = require("../models/doctorModel");

exports.addDetails = async (req, res, next) => {
  const {
    patient_name,
    gender,
    age,
    heartRate,
    bp,
    o2,
    department,
    diagnosis,
    explanation,
  } = req.body;

  try {
    const data = await Doctor.create({
      patient_name,
      gender,
      age,
      heartRate,
      bp,
      o2,
      department,
      diagnosis,
      explanation,
    });

    await data.save();
    res.send("DONE");
  } catch (err) {
    console.log(err);
  }
};
