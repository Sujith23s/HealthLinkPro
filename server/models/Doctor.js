const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number : String,
    gender : String,
    age: String ,
    specialization: String,
})

const DoctorModel = new mongoose.model("Doctor", DoctorSchema);

module.exports = DoctorModel;