import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';

const FormPage = () => {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    total_sqft: "",
    location: "",
    bhk: "",
    bath: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null); // State for predicted price
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Fetch locations
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/get_location_names`);
        setLocations(response.data.locations || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
        setErrorMessage("Failed to fetch locations. Please try again later.");
      }
    };

    fetchLocations();
  }, [API_BASE_URL]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestData = {
      total_sqft: formData.total_sqft,
      location: formData.location,
      bhk: formData.bhk,
      bath: formData.bath,
    };
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/predict_home_price`,
        qs.stringify(requestData), 
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      setPredictedPrice(response.data.estimated_price); 
      setErrorMessage(null); 
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to predict the price. Please check your inputs or try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Housing Price Prediction</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
      >
        {/* Total Square Feet */}
        <div className="mb-4">
          <label
            htmlFor="total_sqft"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Total Square Feet
          </label>
          <input
            type="number"
            id="total_sqft"
            name="total_sqft"
            value={formData.total_sqft}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* BHK */}
        <div className="mb-4">
          <label
            htmlFor="bhk"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            BHK (Bedrooms)
          </label>
          <input
            type="number"
            id="bhk"
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Baths */}
        <div className="mb-4">
          <label
            htmlFor="bath"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Baths
          </label>
          <input
            type="number"
            id="bath"
            name="bath"
            value={formData.bath}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Predicted Price Display */}
      {predictedPrice !== null && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-green-600">
            Predicted Price: ${predictedPrice.toLocaleString()}
          </h2>
        </div>
      )}

      {/* Error Message Display */}
      {errorMessage && (
        <div className="mt-6 text-center">
          <p className="text-red-600">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default FormPage;
