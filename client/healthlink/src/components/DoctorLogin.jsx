import { useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }
    
        axios
            .post("http://localhost:5001/DoctorLogin", { email, password })
            .then((result) => {
                console.log(result.data); 
                if (result.data.message === "Login Successfull") {
                    localStorage.setItem("userId", result.data.userId);  
                    console.log("Navigating to dashboard");
                    navigate("/");  
                } else {
                    alert(result.data); 
                }
            })  
            .catch((err) => {
                console.error(err); 
                alert("An error occurred while logging in. Please try again.");
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 ">
        <div className="bg-white p-6 rounded w-1/4">
            <h2 className="text-2xl font-semibold text-center mb-4">DoctorLogin</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                        <strong>Email</strong>
                    </label>
                    <input 
                        type="email" 
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-none w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {setEmail(e.target.value)}}
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
                        className="form-control rounded-none w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <button type="submit" className="btn btn-success w-full py-2 mt-4 rounded-none bg-green-500 text-white hover:bg-green-600">
                    Login
                </button>
            </form>
            <p className="mt-4 ml-3 font-semibold text-gray-600 mb-4">Does not have an account? <Link to="/DoctorRegister" className="ml-3 font-semibold  text-blue-800">Sign Up</Link></p>
            <Link to='/'><p className="text-center font-semibold text-gray-600">Back to Home</p></Link>
        </div>
    </div>
    
    );
}

export default  DoctorLogin;