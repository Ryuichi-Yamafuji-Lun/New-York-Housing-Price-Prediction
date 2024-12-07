// Page about project detail
import React from 'react';

function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">About This Project</h1>

      <p className="mb-4">
        <strong>NY Home Value Forecast</strong> is a personal project designed to showcase my skills in 
        <strong> data analysis</strong>, <strong>machine learning</strong>, and <strong>web development</strong>. 
        The goal of this project is to predict housing prices in New York City using a 
        <strong> linear regression model</strong> trained on real-world data.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Dataset:</strong> This project uses the{' '}
          <a 
            href="https://www.kaggle.com/datasets/nelgiriyewithana/new-york-housing-market" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-600 hover:underline"
          >
            New York Housing Market dataset
          </a> sourced from Kaggle. The dataset was cleaned and preprocessed to ensure meaningful inputs.
        </li>
        <li>
          <strong>Machine Learning Model:</strong> A pre-trained linear regression model built with Python’s 
          <strong> scikit-learn</strong> predicts home prices based on total square footage, number of bedrooms, 
          number of bathrooms, and location.
        </li>
        <li>
          <strong>Backend:</strong> Built with <strong>FastAPI</strong>, the backend serves predictions via RESTful 
          API endpoints.
        </li>
        <li>
          <strong>Frontend:</strong> Built with <strong>React</strong> and styled with <strong>Tailwindcss</strong>, for dynamic and interactive user interfaces with a modern, responsive, and visually appealing design.
         
        </li>
        <li>
          <strong>Deployment:</strong> The backend is deployed on <strong>Render</strong>, making the application live 
          and accessible.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Steps Taken</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Data cleaning and preprocessing to handle missing values and optimize features.</li>
        <li>Building and training a linear regression model using scikit-learn.</li>
        <li>Creating a RESTful API with FastAPI for model interaction.</li>
        <li>Developing a user-friendly interface using React for seamless predictions.</li>
        <li>Deploying the application on Render for scalability.</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Purpose and Goals</h2>
      <p className="mb-4">
        This project demonstrates my ability to work with real-world datasets, build and train machine learning models, 
        develop robust APIs, and create responsive web applications. It highlights my technical expertise in 
        <strong> AI development</strong>, <strong>full-stack engineering</strong>, and <strong>problem-solving</strong>.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">GitHub Repository</h2>
      <p>
        The complete source code and documentation for this project will be available on my{' '}
        <a 
          href="https://github.com/Ryuichi-Yamafuji-Lun/New-York-Housing-Price-Prediction"
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-600 hover:underline"
        >
          GitHub Repository
        </a>.
      </p>
    </div>
  );
}

export default AboutPage;