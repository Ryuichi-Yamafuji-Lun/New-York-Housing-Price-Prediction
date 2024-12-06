// Form for users to get a predicted price
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FormPage = () => {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    total_sqft: "",
    location: "",
    bhk: "",
    baths: "",
  });

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // fetch locations
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/get_location_names`);
        setLocations(response.data.locations || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, [API_BASE_URL]);

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log or send formData to the backend
    console.log("Submitting form data:", formData);

    try {
      const response = await axios.post(`${API_BASE_URL}/predict_home_price`, formData);
      console.log("Prediction result:", response.data);
      // Handle the response (e.g., show prediction results)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
        <h1>Form</h1>
    </div>
  );
}

export default FormPage;