import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPrescription = () => {

  const [details, setDetails] = useState({
    prescription: "",
    PhoneNumber: "",

  });
  const handleDetails = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/prescription", details)
    .then(result => {
      console.log(result);
      navigate("/DoctorDash");
    })
    .catch(err => console.log(err));   
  };
  
  console.log(details)

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <input
        className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
        value={details.PhoneNumber}
        onChange={handleDetails}
        name="PhoneNumber"
        type="text"
        placeholder="Mobile Number"
      />
      <textarea
        className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
        name="prescription"
        id=""
        value={details.prescription}
        onChange={handleDetails}
        required
        placeholder="Text"
      ></textarea>
      <button className=" bg-green-500 p-3" type="submit" >
        Submit
      </button>
      </form>
    </div>
  );
};

export default AddPrescription;
