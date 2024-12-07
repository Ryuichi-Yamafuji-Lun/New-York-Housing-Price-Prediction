import React from "react";
import { useNavigate } from "react-router-dom";
import NYImage from '../../../../client/src/assets/NewYork.png'

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/forecast"); 
  };


  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Welcome Section */}
      <div className="flex flex-col-reverse md:flex-row items-center m-16 md:m-16 px-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to NY Home Value Forecast
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover your property's potential with cutting-edge predictive technology.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            This website is a personal project designed to demonstrate my skills in web development, machine learning, and UI/UX design. It provides an example of how advanced machine learning models can predict property prices based on real estate data.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            Start your journey today by exploring the prediction tools. Whether you're a student, developer, or enthusiast, this project offers a glimpse into practical applications of machine learning.
          </p>
          <p className="text-gray-500 mt-4 text-sm italic">
            Disclaimer: This platform is for educational purposes only and should not be used for real-world financial or real estate decisions.
          </p>
          <button 
            className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 mt-6"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>

        {/* New York Image */}
        <div className="md:w-1/2 pl-2">
          <img
            src = {NYImage}
            alt="New York Skyline"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
