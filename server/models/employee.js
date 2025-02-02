const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number : String,
    gender : String,
    age: String 
})

const EmployeeModel = new mongoose.model("employees", EmployeeSchema);

module.exports = EmployeeModel;