import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
    
  const [Form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    age:"",
    specialization:""
  });
  
  const handleForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/DoctorRegister", Form)
      .then(result => {
        console.log(result);
        navigate("/DoctorLogin");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 ">
      <div className="bg-white p-6 rounded w-1/2">
        <h2 className="text-2xl text-center mb-4 font-semibold">Doctor Registeration</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                <strong>Name</strong>
              </label>
              <input 
                type="text"   
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                value={Form.name}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                <strong>Email</strong>
              </label>
              <input 
                type="email" 
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                value={Form.email}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                <strong>Password</strong>
              </label>
              <input 
                type="password"
                placeholder="Enter Password"
                name="password"
                value={Form.password}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="specialization" className="block mb-2">
                <strong>Specialization</strong>
              </label>
              <input 
                type="text" 
                placeholder="Enter Email"
                autoComplete="off"
                name="specialization"
                value={Form.specialization}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block mb-2">
                <strong>Mobile Number</strong>
              </label>
              <input 
                type="text" 
                placeholder="Enter Mobile Number"
                autoComplete="off"
                name="number"
                value={Form.number}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block mb-2">
                <strong>Gender</strong>
              </label>
              <input 
                type="text" 
                placeholder="Enter Gender"
                autoComplete="off"
                name="gender"
                value={Form.gender}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block mb-2">
                <strong>Age</strong>
              </label>
              <input 
                type="text" 
                placeholder="Enter Age"
                autoComplete="off"
                name="age"
                value={Form.age}
                className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleForm}
              />
            </div>
          </div>
          <button type="submit" className="w-full mt-2 py-2 bg-green-500 text-white rounded-none hover:bg-green-600">
            Register
          </button>
        </form>
        <p className="mt-4 font-semibold text-center text-gray-600">Already have an Account?<Link to="/DoctorLogin" className="ml-4 font-semibold text-blue-800">Login</Link></p>
      </div>
    </div>
  );
}

export default DoctorRegister;