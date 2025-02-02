import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/images/image1.png";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    axios
      .post("http://localhost:5001/getUser", { id: userId })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          navigate("/login");
        } else {
          setUser(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch user details");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Patient Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-8 items-center">
          <div className="flex justify-center">
            <img
              src={img1}
              alt="User"
              className="w-60 h-60 rounded-full bg-slate-400 shadow-md"
            />
          </div>
          <div className="text-xl text-gray-700 space-y-2">
            <p>
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Age:</span> {user.age}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {user.number}
            </p>
            <p>
              <span className="font-medium">Address:</span> {user.address}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
          <Link to="/Booking">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
              Book Appointment
            </button>
          </Link>
          <Link to="/View">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
              View Appointments
            </button>
          </Link>
          <button className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition">
            View Prescriptions
          </button>
          <button
            className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
