import pickle
import json
import numpy as np
import warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")

__locations = None
__data_columns = None
__model = None

def load_artifacts():
    print("Loading artifact data")
    global __locations
    global __data_columns
    global __model

    with open("server/model/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]

    if __model is None:
        with open("../model/new_york_home_prices_model.pickle", "rb") as f:
            __model = pickle.load(f)
    
    print("Loading artifact is done")

def get_estimated_price(location,sqft,bhk,bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = bhk
    x[1] = bath
    x[2] = sqft
    if loc_index>=0:
        x[loc_index] = 1

    return round(__model.predict([x])[0],2)

def get_location_names():
    return __locations

def get_columns():
    return __data_columns

# for testing purposes (python3 util.py)
if __name__ == "__main__":
    load_artifacts()

    print("Locations:", get_location_names())
    print("Columns: ", get_columns())
    print(get_estimated_price('brooklyn',1000, 3, 3))
    print(get_estimated_price('brooklyn', 1000, 2, 2))
    print(get_estimated_price('manhattan', 1000, 2, 2)) 
    print(get_estimated_price('manhattan', 1000, 2, 2))