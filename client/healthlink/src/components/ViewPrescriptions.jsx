import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ViewPrescriptions() {
  const [prescription, setPrescription] = useState([]);
  const navigate = useNavigate();
  console.log(prescription);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if (!userId) {
      navigate("/dash");
      return;
    }

    axios
      .post("http://localhost:5001/ViewPrescriptions",{ userId })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          navigate("/dash")
        } else {
          setPrescription(response.data);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to fetch Prescription");
        navigate("/dash")
      });
  },[navigate]);

  return (
    <>
      <div>
        {prescription.map((prescription) => (
          <div
            key={prescription._id}
            className="p-4 bg-blue-100 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-medium"
              id="prescription">
              prescription: {prescription.prescription}
              </p>
            
              <p className="text-sm text-gray-700">Phone Number: {prescription.PhoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewPrescriptions;
