import pytest
from fastapi.testclient import TestClient
from server import util
from server import app  

# Setup the test client
client = TestClient(app)

# Fixture to load artifacts before running any tests
@pytest.fixture(scope="session", autouse=True)
def load_artifacts_for_tests():
    """
    Loads the required artifacts for all tests in the session.
    """
    print("Loading artifacts for tests...")
    util.load_artifacts()  # Make sure this loads your model and data columns

# Test for '/get_location_names' endpoint
def test_get_location_names():
    # Send a GET request to the endpoint
    response = client.get("/get_location_names")
    
    # Ensure the status code is 200 (OK)
    assert response.status_code == 200

    # Parse the JSON response
    data = response.json()
    
    # Validate that the "locations" key exists
    assert "locations" in data

    # Validate the actual locations list
    locations = data["locations"]
    print(f"Retrieved locations: {locations}")  # For debugging purposes

    # Define the expected locations
    expected_locations = [
        'bronx county', 'brooklyn', 'kings county', 'manhattan', 'new york',
        'new york county', 'queens', 'queens county', 'richmond county',
        'staten island', 'the bronx'
    ]
    
    # Ensure all expected locations are in the returned list
    for location in expected_locations:
        assert location in locations

# Test for '/predict_home_price' endpoint
def test_predict_home_price():
    # Send a POST request to the endpoint with required data
    response = client.post(
        "/predict_home_price",
        data={
            "total_sqft": 1200,
            "location": "brooklyn",
            "bhk": 3,
            "bath": 2,
        },
    )
    
    # Ensure the status code is 200 (OK)
    assert response.status_code == 200
    
    # Ensure the response contains 'estimated_price'
    assert "estimated_price" in response.json()

# Test to verify artifacts are loaded correctly
def test_artifacts_loaded():
    assert util.__data_columns is not None, "Data columns should be loaded."
    assert util.__model is not None, "Model should be loaded."
