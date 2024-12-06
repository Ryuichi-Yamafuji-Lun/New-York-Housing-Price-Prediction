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

  // handle form change

  // handle form submission
  
  return (
    <div>
        <h1>Form</h1>
    </div>
  );
}

export default FormPage;