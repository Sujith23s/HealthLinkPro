import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  console.log(appointments)


  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/dash");
      return;
    }

    axios
      .post("http://localhost:5001/getAppointments", { userId })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          navigate("/dash");
        } else {
          setAppointments(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch appointments");
        navigate("/dash");
      });
  }, [navigate]);

  const handleBack = () => {
    navigate("/dash"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center p-4">
    <button
      onClick={handleBack}
      className="absolute top-4 left-4 text-xl text-blue-600 hover:text-blue-800"
    >
      &#8592; Back
    </button>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Your Appointments
        </h2>
        {appointments.length === 0 ? (
          <p className="text-center text-xl text-gray-700">No appointments booked yet.</p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="p-4 bg-blue-100 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium">Doctor: {appointment.doctor}</p>
                  <p className="text-sm text-gray-700">Date: Today {appointment.date}</p>
                  <p className="text-sm text-gray-700">Time: {appointment.Slot}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;