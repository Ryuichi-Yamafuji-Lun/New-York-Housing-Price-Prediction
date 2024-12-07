from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from server import util

app = FastAPI()

# enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

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

@app.post("/predict_home_price")
async def predict_home_price(
    total_sqft: float = Form(...),
    location: str = Form(...),
    bhk: int = Form(...),
    bath: int = Form(...)
):
    estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)
    response = JSONResponse(content={"estimated_price": estimated_price})
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response