from fastapi import FastAPI
from fastapi.responses import JSONResponse
import util

app = FastAPI()

# load location, columns, and model on start up
@app.on_event("startup")
async def load_data():
    util.load_artifacts()

@app.get("/get_location_names")
async def get_location_names():
    locations = util.get_location_names()
    response = JSONResponse(content={"locations": locations})
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response

