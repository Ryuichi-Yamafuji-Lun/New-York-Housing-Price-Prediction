import pickle
import json
import numpy as np

__locations = None
__data_columns = None
__model = None

def load_artifacts():
    print("Loading artifact data")
    global __locations
    global __data_columns
    global __model

    with open("../model/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]

    if __model is None:
        with open("../model/new_york_home_prices_model.pickle", "rb") as f:
            __model = pickle.load(f)
    
    print("Loading artifact is done")


