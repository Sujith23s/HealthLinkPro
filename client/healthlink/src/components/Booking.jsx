import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [details, setDetails] = useState({
    Slot: "",
    doctor: "",
    PhoneNumber:""
  });
  //console.log(details)

  const handleDetails = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5001/booking", details)
    .then((result) => {
      console.log(result.data.message)
      if(result.data.message === "Booking processed successfully!") {
        navigate("/dash ")
      }else{
        alert(result.data.message || "Please enter registered phone number")
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center p-4">
      <button
        className="absolute top-4 left-4 text-xl text-blue-600 hover:text-blue-800"
        onClick={() => navigate(-1)}
      >
        &#8592; Back
      </button>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Book Appointment
          </h2>

          <div className="mb-4">
            <label htmlFor="Slot1" className="block text-gray-700">Select Slot</label>
            <select
              name="Slot" // Add the name attribute
              id="Slot1"
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              value={details.Slot}
              onChange={handleDetails}
              required
            >
              <option value="">Select a Slot</option>
              <option value="9 AM to 12 PM">9 AM to 12 PM</option>
              <option value="10 AM to 12 PM">10 AM to 12 PM</option>
              <option value="4 PM to 6 PM">4 PM to 6 PM</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="Slot2" className="block text-gray-700">Select Doctor</label>
            <select
              name="doctor" // Add the name attribute
              id="Slot2"
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              value={details.doctor}
              onChange={handleDetails}
              required
            >
              <option value="">Select a Doctor</option>
              <option value="cardio">Cardio</option>
              <option value="ortho">Ortho</option>
              <option value="neurology">Neurology</option>
            </select>
            <label htmlFor="PhoneNumber" className="block text-gray-700 mt-3">Enter Phone Number</label>
            <input 
            type="text" 
            name="PhoneNumber" 
            value={details.PhoneNumber} 
            onChange={handleDetails} 
            id="PhoneNumber" 
            placeholder="Registerd phone number" 
            className="w-full p-2 mt-1 border-black-300 rounded-lg"
            required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
