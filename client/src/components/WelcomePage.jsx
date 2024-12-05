import React from "react";
import NYImage from '../../../client/src/assets/NewYork.png'

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-2 shadow-md">
        <div className="text-2xl font-bold text-purple-800">NY Home Value Forecast</div>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-purple-800">
            About
          </a>
          <a href="#product" className="text-gray-700 hover:text-purple-800">
            Forecast
          </a>
        </div>
      </nav>

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
          <button className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 mt-6">
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
