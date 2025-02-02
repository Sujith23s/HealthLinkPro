const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee.js");
const BookingModel = require("./models/Booking.js")
const DoctorModel = require("./models/Doctor.js")


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post("/Login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({
                        message: "Login Successfull",
                        userId: user._id  
                    });
                } else {
                    res.json("Password is incorrect");
                }
            } else {
                res.json("No user found");
            }
        })
        .catch(err => res.json(err));
});

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    //res.status(200);
});

app.post("/booking", async (req, res) => {
    try{
        const { Slot, doctor, PhoneNumber} = req.body;
        //console.log(Slot, doctor, PhoneNumber);
        EmployeeModel.findOne({number:PhoneNumber})
            .then( async user => {
                if(user){
                    if(user.number == PhoneNumber){
                        const newBooking = new BookingModel({Slot, doctor, PhoneNumber});
                        const savedBooking = await newBooking.save();
                        res.status(200).json({
                            message:"Booking processed successfully!",
                            savedBooking});
                    }/*else{
                        res.status(200).json({message:"Please enter registered phone number"})
                    }*/
                }else{
                    res.json("No user found");
                }
            })
    }catch(error) {
        res.status(500).json({error: error.message})
    }
});


app.post("/getUser", (req, res) => {
  const { id } = req.body;
  EmployeeModel.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/getAppointments", async (req, res) => { 
   const { userId } = req.body;
   try{
    UserId = new mongoose.Types.ObjectId(userId)
    const user = await EmployeeModel.findById(userId)
    const user_booking = await BookingModel.find({"PhoneNumber":String(user.number)})
    //console.log("user from login DB",user.number)
    //console.log("User from booking DB", user_booking)
    if(!user){
        res.status(400).json({message: "User not found"})
    }
    //console.log(user.number)
    //console.log(user_booking[0].PhoneNumber)
    if(user.number === user_booking[0].PhoneNumber){
        //console.log("Detailes of Booked user",user_booking)
        res.status(200).json(user_booking)
    }else{
        console.log("Phone Number does not matched")
    }
   } catch(error) {
    console.log(error);
    res.status(500).json({message:"Mongo error"})
   }
})

app.post("/DoctorLogin", (req, res) => {
    const { email, password } = req.body;
    DoctorModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({
                        message: "Login Successfull",
                        userId: user._id  
                    });
                } else {
                    res.json("Password is incorrect");
                }
            } else {
                res.json("No user found");
            }
        })
        .catch(err => res.json(err));
    });
    
app.post("/DoctorRegister" ,(req,res) => {
    DoctorModel.create(req.body)
       .then(booking=> res.json(booking))
       .catch(err => res.json(err))
    })    

app.get("/getDoctor", (req, res) => {
    DoctorModel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))  
});

app.listen(5001, () => {
    console.log("Server is running");
});
