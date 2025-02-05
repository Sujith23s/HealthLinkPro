const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  prescription: String,
  PhoneNumber: String,
});

const PrescriptionModel = new mongoose.model(
  "prescription",
  PrescriptionSchema
);

module.exports = PrescriptionModel;
